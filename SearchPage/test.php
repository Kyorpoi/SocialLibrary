<?php
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
$value = isset($_POST['value']) ? htmlspecialchars($_POST['value']) : '';
$value = $value + 122221;

$data = array();
$data[0] = array('id' => $name, 'url' => $url, 'value' => $value);
echo json_encode($data);
?>