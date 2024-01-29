<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cuet_alumni";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



$sql = "
SELECT *
FROM alumni
JOIN (
  SELECT *
  FROM search_info
  ORDER BY search_id DESC
  LIMIT 1
) last_search ON
  CASE 
    WHEN last_search.search_by = 'name' THEN alumni.name
    WHEN last_search.search_by = 'present_position' THEN alumni.present_position
    WHEN last_search.search_by = 'organization' THEN alumni.organization
  END = last_search.search_value;
";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $searchData = array();

    while ($row = $result->fetch_assoc()) {
        $searchData[] = $row;
    }

    echo json_encode($searchData);
} else {
    echo "0 results";
}

$conn->close();
?>
