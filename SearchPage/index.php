<?php
//本页采用原生查询方式获取表名查询列名
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
   header('content-type:application/json;charset=utf8');
   require 'config.php';
   $TableName =  isset($_POST['TableName']) ? htmlspecialchars($_POST['TableName']) : '';
   //$TableName =  isset($_GET['TableName']) ? htmlspecialchars($_GET['TableName']) : '';

   $sql =<<<EOF
   SELECT
      "column_name" 
   FROM
      information_schema.COLUMNS 
   WHERE
      table_schema = 'public' 
      AND TABLE_NAME = '$TableName';
EOF;
   //echo $sql;
   $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
   while($row = pg_fetch_row($ret)){
      echo json_encode($row);
   }

?>
