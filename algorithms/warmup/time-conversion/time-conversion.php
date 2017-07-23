<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$timestamp = strtotime(fgets($_fp));
print date('H:i:s', $timestamp);
fclose($_fp);
?>