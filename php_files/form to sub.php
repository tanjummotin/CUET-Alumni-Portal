<?php
    header('Access-Control-Allow-Origin: *');
    
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

    // Fetch data from POST
    $name = $_POST['name'];
    $email = $_POST['email'];
    $date_of_birth = $_POST['date_of_birth'];
    $blood_group = $_POST['blood_group'];
    $department = $_POST['department'];
    $batch = $_POST['batch'];
    $present_position = $_POST['present_position'];
    $organization = $_POST['organization'];
    $phone_no = $_POST['phone_no'];
    $present_address = $_POST['present_address'];
    $gender = $_POST['gender'];
    $linkedIn_profile_link = $_POST['linkedIn_profile_link'];
    $recent_degree = $_POST['recent_degree'];
    $university_name = $_POST['university_name'];

    // Prepare and execute SQL query
    $sql = "INSERT INTO alumni (name, email, date_of_birth, blood_group, department, batch, present_position, organization, phone_no, present_address, gender, linkedIn_profile_link, recent_degree, university_name) 
            VALUES ('$name', '$email', '$date_of_birth', '$blood_group', '$department', '$batch', '$present_position', '$organization', '$phone_no', '$present_address', '$gender', '$linkedIn_profile_link', '$recent_degree', '$university_name')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Success!";
    } else {
        echo "Error: " . $conn->error;
    }

    // Close connection
    $conn->close();
?>
