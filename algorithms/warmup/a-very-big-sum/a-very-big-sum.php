<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$size = (int)fgets($_fp);
$array = explode(" ", fgets($_fp), $size);
print array_sum($array);
fclose($_fp);
?>