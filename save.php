<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$encoded = $_POST['base64Img'];
$file = fopen("playlist-share/".$_POST['pid'].".png", "w"); //(you can put jpg, png or any other extension)
fwrite($file, base64_decode($encoded));
fclose($file);
?>