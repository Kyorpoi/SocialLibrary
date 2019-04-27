<?php
    require 'Medoo.php';
    use Medoo\Medoo;
    $database = new Medoo([
        'database_type' => 'pgsql',
        'database_name' => 'Data',
        'server' => '192.168.23.129',
        'username' => 'postgres',
        'password' => '851e28c69d050650',
    ]);

    $result = $database -> select("106w", [
        "Username",
        "Password"
    ], [
        "Password[~]" => 123
    ]);
    print_r($result);
    var_dump( $database->log() );
    //print_r($database->info());  
    echo "<br>";
    echo array_keys($result);
?>