<?php 
    session_start();
    header('Access-Control-Allow-Origin: *');
    $conn = new mysqli("localhost","root","","cuet_alumni");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
//         $search_by = isset($_POST['search_by']) ? $_POST['search_by'] : null;
// $search_value = isset($_POST['search_value']) ? $_POST['search_value'] : null;

// // Debugging statements
// var_dump($_POST); // Output the entire $_POST array for inspection
// var_dump($search_by, $search_value); // Output individual variables for inspection

// $_SESSION['search_by'] = $search_by;
// $_SESSION['search_value'] = $search_value;

// // ... rest of the code

        $search_by = $_POST['search_by'];
        $search_value = $_POST['search_value'];
        $_SESSION['search_by']=$search_by;
        $_SESSION['search_value']=$search_value;
        $sql = "INSERT INTO search_info(search_by,search_value) VALUES('$search_by','$search_value');";
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