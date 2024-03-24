<?php

//Call API header
require_once 'C:\xampp\htdocs\test\request_config.php';

// //Connect to the database
// require_once 'C:\xampp\htdocs\test\dbconfig';
// echo("inside");

$conn = mysqli_connect("localhost", "root", "", "cuet_alumni");

if (!$conn) {
    echo "Connection Failed";
}
$msg = "";

//Output values
function createResponse($status, $message, $data = []) 
{
    $response = 
    [
        'status' => $status,
        'message' => $message,
        'data' => $data
    ];
    return json_encode($response);
}
// echo("inside1");
// function validateInput($input) 
// {
//     //SQL Injection protection
//     if(preg_match('/<script\b[^>]*>(.*?)<\/script>/is', $input)) 
//     {
//         return false;
//     }

//     // XSS protection
//     if(preg_match('/<[^>]*>/', $input)) 
//     {
//         return false;
//     }

//     return true;
// }
//echo("inside2");

//Encrypt
function xorEncrypt($input) 
{

    return base64_encode($input);
}
//echo("inside3");
//Processing API requests
if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
   // echo "inside 31";
    //Check and process entered data
    $data = json_decode(file_get_contents('php://input'), true);
    //echo "inside 4";
    if($data) 
    {

        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';

        if (!$data || empty($data['email']) || empty($data['password'])) 
        {
            echo createResponse('error', 'Missing required fields.', []);
            exit;
        }

        // $email_hash = base64_encode($data['email']);
        // $email_hash = $data['email'];
        // $password = $data['password'];
        // echo "inside 5";
        // echo $password;
        // echo "email";
        // echo  $email_hash;
       
        // $sql = "SELECT * FROM alumni WHERE email = '$email_hash'";
        // $query = $connection->prepare($sql);
        // $query->execute();
        // $row = $query->fetch(PDO::FETCH_ASSOC);
        
        
        // $password_hash = $row['password'];
        // echo "pass2->";
        // echo $password_hash;
        // echo("end");
        $sql = "SELECT * FROM alumni WHERE email='{$email}' AND password='{$password}'";
        $result = mysqli_query($conn, $sql);
        
     
        if(mysqli_num_rows($result) === 1)
        {
            session_start();
            $sql = "SELECT * FROM alumni WHERE email='{$email}'";
            $result = mysqli_query($conn, $sql);

            $idq2=mysqli_fetch_assoc($result);
            $_SESSION['username'] = $idq2['name'];
            $_SESSION['present_position'] = $idq2['present_position'];
            $_SESSION['organization'] = $idq2['organization'];
            $_SESSION['blood_group'] = $idq2['blood_group'];
            $_SESSION['email'] = $idq2['email'];
            $_SESSION['present_address'] = $idq2['present_address'];
            $_SESSION['gender'] = $idq2['gender'];
            $_SESSION['recent_degree'] = $idq2['recent_degree'];
            $_SESSION['university_name'] = $idq2['university_name'];

            //$username = $_SESSION['username'];
            echo createResponse('success', 'Logged in successfully.', ['username' => $_SESSION['username'],
            'present_position' => $_SESSION['present_position'],
            'organization' => $_SESSION['organization'],
            'blood_group' => $_SESSION['blood_group'],
            'email' => $_SESSION['email'],
            'gender' => $_SESSION['gender'],
            'recent_degree' => $_SESSION['recent_degree'],
            'university_name' => $_SESSION['university_name'],
            'present_address' => $_SESSION['present_address'],




        
        ]);
        }
        else 
        {
            echo createResponse('error', "Incorrect login information.", []);
            exit;
        }
    } 
    else 
    {
        echo createResponse('error', 'Wrong request.', []);
        exit;
    }

}
//echo "inside 41";

?>