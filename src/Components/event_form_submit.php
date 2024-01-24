<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","cuet_alumni");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $title = $_POST['title'];
        $date = $_POST['date'];
        $time = $_POST['time'];
        $type = $_POST['type'];
        $online_or_in_person = $_POST['online_or_in_person'];
        $location = $_POST['location'];
        $event_description = $_POST['event_description'];

         
        $sql = "INSERT INTO event_info(title,date,time,type,online_or_in_person,location,event_description) VALUES('$title','$date','$time','$type','$online_or_in_person','$location','$event_description');";
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