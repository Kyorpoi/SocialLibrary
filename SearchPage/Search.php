<?php
    require 'Medoo.php';
    //require 'config.php';
   // print_r($database->info());  
    //echo "<h1>php通用数据库db类Medoo使用示例</h1>";
    $database = new medoo('my_database');
    $datas = $database->select("94im", [
        "Username",
        "Password"
    ], [
        "Password"[~]" => 123%
    ]);
    print_r($database->info());  
    var_dump($database->error());
?>