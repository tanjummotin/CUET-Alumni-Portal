<?php


//Connect to the database
require_once 'C:\xampp\htdocs\test\request_config.php';

unset($_SESSION['username']);
unset($_SESSION['loggedIn']);

session_destroy();

exit;

?>