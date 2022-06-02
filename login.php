<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale'1.0">
        <meta charset="UTF-8">
        <meta name="description" content="">
        <title>Login/Sign Up</title>
        <link rel="stylesheet" href="picture.css">
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

                $select = mysqli_query($conn, "SELECT * FROM info WHERE (email = '$email' AND passcode = '$passcode');");

                if (mysqli_num_rows($select) > 0) {
                    $fetch = mysqli_fetch_assoc($select);
                    ?>
                    <h2>Welcome <?php echo $fetch['username'];?></h2>
                    <div class="profile-pic-div">
                        <img src="user.jpg" id="photo">
                        <input type="file" id="file">
                        <label for="file" id="uploadBtn">Choose Photo</label>
                    </div>
                    <div class="options">
                        <a href='index.html'>Main</a>
                        <h4>Posts</h4>
                        <h4>Comments</h4>
                        <h4 style="color:red">Sign out</h4>
                        <h4 style="color:red">Delete account</h4>
                    </div>
                    <?php
                    
                } else {
                    echo "incorrect username/password";
                    echo "<a href='index.html'>Main</a>";
                }
            ?> 
        </div>

        <script src="picture.js"></script>
    </body>
</html>
