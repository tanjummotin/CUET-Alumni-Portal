<?php
session_start();

// Your database connection code
$conn = mysqli_connect("localhost", "root", "", "cuet_alumni");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Placeholder for login status and user name
$response = array();

if (isset($_SESSION['islogged']) && $_SESSION['islogged']) {
    // The user is logged in
    $response['isLogged'] = true;

    // Fetch the user's name from the database
    $email = $_SESSION['email'];
    $sql = "SELECT name FROM alumni WHERE email='{$email}'";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        $response['userName'] = $row['name'];
    } else {
        $response['userName'] = 'Unknown';
    }
} else {
    // The user is not logged in
    $response['isLogged'] = false;
    $response['userName'] = '';
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);

// Close the database connection
mysqli_close($conn);
?>
