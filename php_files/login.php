<!-- <?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "cuet_alumni");

if (!$conn) {
    die("Connection Failed");
}

$msg = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo("inside");
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);  // Do not use md5 here

    $sql = "SELECT * FROM alumni WHERE email='{$email}'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        $hashedPassword = $row['password'];

        // Compare the plain text password with the hashed password
        if (password_verify($password, $hashedPassword)) {
            $_SESSION['email'] = $email;
            $_SESSION['islogged'] = true;
            echo json_encode(['success' => true, 'message' => 'Login successful']);
            exit;
        } else {
            echo json_encode(['success' => false, 'message' => 'Email or password do not match']);
            exit;
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Email or password do not match']);
        exit;
    }
}
?> -->

