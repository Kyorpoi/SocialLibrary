<?php
   require 'config.php';
   $sql =<<<EOF
   SELECT DISTINCT
      "Username",
      "Password" 
   FROM
      "94im" 
   WHERE
      "Password" LIKE'123%' 
   UNION SELECT
      "Username",
      "Password" 
   FROM
      "106w" 
   WHERE
      "Password" LIKE'103%' 
      LIMIT 10 OFFSET 0;
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
   echo"<table style='border-color: #efefef;' border='1px' cellpadding='5px' cellspacing='0px'><tr>";
   while($row = pg_fetch_row($ret)){
      echo "<td>username = ". $row[0] . "</td>";
      echo "<td>password = ". $row[1] . "</td>";
      echo '<tr>';
}
   echo "Operation done successfully";
   pg_close($db);
?>
