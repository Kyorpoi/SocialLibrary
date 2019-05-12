<?php
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$city = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
$value = isset($_POST['value']) ? htmlspecialchars($_POST['value']) : '';
$value = $value + 122221;
echo '网站名: ' . $name;
echo "<br>";
echo 'URL 地址: ' . $city;
echo '<br>';
echo '值: ' . $value;
?>