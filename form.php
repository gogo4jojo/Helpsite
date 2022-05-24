<?php //https://youtu.be/Y9yE98etanU

$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL); 
$user_name = $_POST["username"];
$passcode = $_POST["passcode"];

if ( ! $email) {
    die("Must enter a valid email.");
}

//var_dump($email, $username, $passcode)

$host = "localhost";
$dbname = "test";
$username = "new_user";
$password = "password";

$conn = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO info (email, username, passcode)
        VALUES (?, ?, ?)";

$stmt = mysqli_stmt_init($conn); //stmt is short fot statement

if ( ! mysqli_stmt_prepare($stmt, $sql) ) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sss", $email, $user_name, $passcode);
//in "sss" every 's' stands for string, email is string, username is string, passcode is string

mysqli_stmt_execute($stmt);

echo "Account created!";
echo "<a href='login.html' target='_blank'>Return to login page</a>";

?>