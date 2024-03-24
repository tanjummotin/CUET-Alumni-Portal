<?php
session_start();

if (!isset($_SESSION['user_email'])) {
    header("Location: login.php");
    exit();
}

// Include database connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_email = $_SESSION['user_email'];

// If the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $receiver_email = $_POST['receiver_email'];
    $message = $_POST['message'];

    if (!empty($receiver_email) && !empty($message)) {
        // Insert message into the database
        $query = "INSERT INTO messages (sender_email, receiver_email, message) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sss", $user_email, $receiver_email, $message);
        $stmt->execute();
    }
}

// Retrieve alumni emails
$query_alumni = "SELECT email FROM alumni";
$result_alumni = $conn->query($query_alumni);

// Retrieve sent and received messages sorted by timestamp
$query_messages = "SELECT * FROM messages WHERE (sender_email = ? AND receiver_email = ?) OR (sender_email = ? AND receiver_email = ?) ORDER BY timestamp";
$stmt_messages = $conn->prepare($query_messages);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Messages</title>
</head>
<body>
    <h1>Sent and Received Messages</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="receiver_email">Select Alumni:</label>
        <select id="receiver_email" name="receiver_email" required>
            <?php while ($row_alumni = $result_alumni->fetch_assoc()) {
                echo "<option value='" . $row_alumni['email'] . "'>" . $row_alumni['email'] . "</option>";
            } ?>
        </select>
        <br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <br>
        <button type="submit">Send Message</button>
    </form>
    <h2>Chat History</h2>
    <ul>
        <?php
        // Fetch chat history with selected alumni
        $result_alumni->data_seek(0);
        while ($row_alumni = $result_alumni->fetch_assoc()) {
            $receiver_email = $row_alumni['email'];
            $stmt_messages->bind_param("ssss", $user_email, $receiver_email, $receiver_email, $user_email);
            $stmt_messages->execute();
            $result_messages = $stmt_messages->get_result();

            while ($row_messages = $result_messages->fetch_assoc()) {
                $message_type = ($row_messages['sender_email'] == $user_email) ? "Sent" : "Received";
                echo "<li>" . $message_type . " (" . $row_messages['timestamp'] . "): " . $row_messages['message'] . "</li>";
            }
        }
        ?>
    </ul>
    <!-- <a href="logout.php">Logout</a> -->
</body>
</html>
