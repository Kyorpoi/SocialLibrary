<?php
   $host        = "host=192.168.23.129";
   $port        = "port=5432";
   $dbname      = "dbname=Data  ";
   $credentials = "user=postgres password=851e28c69d050650";
   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      echo "Error : Unable to open database";
   } 
   else {
      ;
   }
?>