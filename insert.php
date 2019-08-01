<?php
if(isset($_POST["fname"])){
echo "string";
	$fname = $_POST["fname"];}
 
if(isset($_POST["email"])){
echo "string2";
	$email = $_POST["email"];}


 if(isset($_POST["feedback"])){$feedback = $_POST["feedback"];}




if(!empty($fname) || !empty($email) || !empty($feedback)){
    $host="localhost";
    $dbUsername="root";
    $dbPassword="";
    $dbname="feedback";
    
    $con=mysqli_connect($host,$dbUsername,$dbPassword,$dbname);
    
    if(mysqli_connect_error()){
    	die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    } 

    else{
    	
			$INSERT = "INSERT INTO feedback_data (name,email,feedback) VALUES ('$fname','$email','$feedback')";
			mysqli_query($con,$INSERT);
			
			echo "New record inserted sucessfully";
    }
     $con->close();
}else{
	echo "All field are required";
 	die();
}

?>