<?php
//本页为手撸记录备份
   $SColName = '"Username","Password"';
   $TableName = '"94im"';
   $CColName = '"Password"';
   $Value = "'123%'";
   $Page = "1";

   $sql =<<<EOF
   SELECT DISTINCT
      {$SColName} 
   FROM
      {$TableName} 
   WHERE
      {$CColName} LIKE {$Value} 
   UNION SELECT
      "Username",
      "Password" 
   FROM
      "106w" 
   WHERE
      "Password" LIKE'103%'
EOF;
   $ret = pg_query($db, $sql);
   if($ret == null)
   {
      echo 'null';
   }
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
   $Count = pg_affected_rows($ret);
   echo"<table style='border-color: #efefef;' border='1px' cellpadding='5px' cellspacing='0px'><tr>";
   while($row = pg_fetch_row($ret)){
      echo "<td>username = ". $row[0] . "</td>";
      echo "<td>password = ". $row[1] . "</td>";
      echo '<tr>';
}
   echo "一共有{$Count}行";
   pg_close($db);
?>
