<?php
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$a = $_GET['a'];
$b = $_GET['b'];
$cars=array("Volvo"=>"9","BMW"=>"9","Toyota"=>"5");
$c = $a + $b;

echo($c);
echo "<br>";
print_r(array_keys($cars));
echo "<br>";
print_r($c);
echo "<br>";
var_dump($c);
?>
