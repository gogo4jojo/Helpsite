<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale'1.0">
        <meta charset="UTF-8">
        <meta name="description" content="">
        <title>Login/Sign Up</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <link rel="shortcut icon" href="">
        <link rel="stylesheet" href="main.css">
    </head>

    <body> 
        <div class="container" class="form__input-group">
            <?php

                $host = "localhost";
                $dbname = "test";
                $username = "new_user";
                $password = "password";

                $conn = mysqli_connect($host, $username, $password, $dbname);

                $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL); 
                $passcode = $_POST["passcode"];

                $exists = mysqli_query($conn, "SELECT * FROM info WHERE (email = '$email' AND passcode = '$passcode');");

                if (mysqli_num_rows($exists) > 0) {
                    echo "Logging in...";
                } else {
                    echo "incorrect username/password";
                }

            ?>
        </div>
    </body>
</html>