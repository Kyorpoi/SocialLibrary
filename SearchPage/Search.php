<?php
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
//本页为调用medoo
    require 'Medoo.php';
    //include 'config.php'
    use Medoo\Medoo;
    $database = new Medoo([
        'database_type' => 'pgsql',
        'database_name' => 'Data',
        'server' => '192.168.23.129',
        'username' => 'postgres',
        'password' => '851e28c69d050650',
    ]);


    $SColName = isset($_POST['SColName']) ? htmlspecialchars($_POST['SColName']) : '';
    $TableName =  isset($_POST['TableName']) ? htmlspecialchars($_POST['TableName']) : '';
    $CColName = isset($_POST['CColName']) ? htmlspecialchars($_POST['CColName']) : '';
    $Value =  isset($_POST['Value']) ? htmlspecialchars($_POST['Value']) : '';

    $SColName=array("Username","Password");
    
    $result = $database -> select($TableName,[
        $SColName[0],$SColName[1]
    ],[
        $CColName => "$Value"
    ]);
/*
    $result = $database -> debug() -> select("106w", [
        "Username",
        "Password"
    ], [
        "Password[~]" => 123
    ]);
*/
print_r(json_encode($result));
    //var_dump( $database->log() );
    //print_r($database->info());  

?>