<?php 
session_start(); 
$string = ""; 
for ($i = 0; $i < 3; $i++)
	$string .= chr(rand(97, 122)); 

 $_SESSION['captcha'] = $string;  
 //$dir = "cour.ttf"; 
 
 $image = imagecreatetruecolor(120, 60); 
 $black = imagecolorallocate($image, 0, 0, 0); 
 $color = imagecolorallocate($image, 120, 172, 221); 
 $white = imagecolorallocate($image, 215, 241, 242);  
 
 imagefilledrectangle($image,0,0,399,99,$white); 
 imagettftext ($image, 30, 0, 10, 40, $color, $dir."cour.ttf", 
 $_SESSION['captcha']);  
 header("Content-type: image/png");

 imagepng($image); 
 ?>