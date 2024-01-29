<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "cuet_alumni");

if (!$conn) {
    die("Connection Failed");
}

$msg = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, md5($_POST['password']));

    $sql = "SELECT * FROM alumni WHERE email='{$email}' AND password='{$password}'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {
        $_SESSION['email'] = $email;
        $_SESSION['islogged'] = true;
        echo json_encode(['success' => true, 'message' => 'Login successful']);
        exit;
    } else {
        echo json_encode(['success' => false, 'message' => 'Email or password do not match']);
        exit;
    }
}
?>
