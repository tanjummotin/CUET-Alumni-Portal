<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","cuet_alumni");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
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

        $sql = "INSERT INTO alumni(name,email,date_of_birth,blood_group,department,batch,present_position,organization,phone_no,present_address,gender,linkedIn_profile_link,recent_degree,university_name) VALUES('$name','$email','$date_of_birth','$blood_group','$department','$batch','$present_position','$organization','$phone_no','$present_address','$gender','$linkedIn_profile_link','$recent_degree','$university_name');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>