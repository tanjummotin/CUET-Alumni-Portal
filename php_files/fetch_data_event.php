<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$databaseConfig = [
    'host' => 'localhost',
    'username' => 'root',
    'password' => '',
    'dbname' => 'cuet_alumni',
];

try {
    $pdo = new PDO("mysql:host={$databaseConfig['host']};dbname={$databaseConfig['dbname']}", $databaseConfig['username'], $databaseConfig['password']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM event_info";
    $stmt = $pdo->query($sql);

    $eventData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($eventData);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
