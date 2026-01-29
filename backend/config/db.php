<?php
$host = "localhost";
$user = "root";   // default for XAMPP
$pass = "";       // default is empty
$dbname = "teaspice_app";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
