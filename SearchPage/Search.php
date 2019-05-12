<?php
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


    $SColName = 'UsernamePassword';
    $SCloName1 = 'Password';
    $TableName = '106w';
    $CColName = '"Password[~]"';
    $Value = 123;
    $Page = "1";
    echo $SColName;
    echo "<br>";

    $result = $database -> debug() -> select($TableName,[
        $SColName
    ],[
        $CColName => "$Value"
    ]);
    echo "<br>";
/*
    $result = $database -> debug() -> select("106w", [
        "Username",
        "Password"
    ], [
        "Password[~]" => 123
    ]);
*/
    print_r($result);
    //var_dump( $database->log() );
    //print_r($database->info());  
    echo "<br>";
    echo array_keys($result);
?>