<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cuet_alumni";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM event_info";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $eventData = array();

    while ($row = $result->fetch_assoc()) {
        $eventData[] = $row;
    }

    echo json_encode($eventData);
} else {
    echo "0 results";
}

$conn->close();
?>
