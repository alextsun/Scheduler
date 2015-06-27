<?php 
	if(isset($_POST["username"])) {
		echo("good");
	} else {
		echo("bad");
	}
	$username = $_POST["username"];
	$password1 = $_POST["password1"];
	$password2 = $_POST["password2"];
	$firstname = $_POST["firstname"];
	$lastname = $_POST["lastname"];
	$email = $_POST["email"];
	$college = $_POST["college"];
	$result = $username . " " . $password . " " . $firstname . " " . $lastname . " " . $email . " " . $college."aga";

	//echo($string);

	file_put_contents("info.txt",  $result,  FILE_APPEND);
	header("Location: index.html");
?>

