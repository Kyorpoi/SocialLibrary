<?php
   require 'config.php';
   $sql =<<<EOF
   SELECT
      "column_name" 
   FROM
      information_schema.COLUMNS 
   WHERE
      table_schema = 'public' 
      AND TABLE_NAME = '2w5Huji';
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
   echo"<table style='border-color: #efefef;' border='1px' cellpadding='5px' cellspacing='0px'><tr>";
   while($row = pg_fetch_row($ret)){
      echo "<td>column_name = ". $row[0] . "</td>";
      echo '<tr>';
}
   echo "Operation done successfully";
   pg_close($db);
?>
