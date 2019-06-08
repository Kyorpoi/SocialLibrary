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

    $TableName =  isset($_POST['TableName']) ? htmlspecialchars($_POST['TableName']) : '';
    $CColName = isset($_POST['CColName']) ? htmlspecialchars($_POST['CColName']) : '';
    $Value =  isset($_POST['CColName']) ? htmlspecialchars($_POST['Value']) : '';
    $Option = isset($_POST['Option']) ? htmlspecialchars($_POST['Option']) : '';

    switch ($Option) {
        case 1:
            $SColName=array("Username","Password");
            break;
        case 2:
            $SColName=array("Email","Password");
        case 3:
            $SColName=array("Username","Password");
        case 4:
            $SColName=array("Name","Address","Phone","Email");
        default:
            # code...
            break;
    }
    
    if($Option == 4){
        $result = $database -> select($TableName,[
            $SColName[0],$SColName[1],$SColName[2],$SColName[3]
        ],[
            $CColName => "$Value"
        ]);
    }
    else{
        $result = $database -> select($TableName,[
        $SColName[0],$SColName[1]
    ],[
        $CColName => "$Value"
    ]);
    }
/*
    $result = $database -> debug() -> select("106w", [
        "Username",
        "Password"
    ], [
        "Password[~]" => 123
    ]);
*/
//print_r($result);
$json_string = json_encode($result);
file_put_contents('data.json',$json_string);
//echo 'ok';
    //var_dump( $database->log() );
    //print_r($database->info());  

?>