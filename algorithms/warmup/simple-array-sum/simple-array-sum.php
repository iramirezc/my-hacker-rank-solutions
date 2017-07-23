<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$size = (int)fgets($_fp);
$numbers = fgets($_fp);
$array = split(" ", $numbers, $size);
$sum = 0;
for($i=0;$i<count($array);$i++){
    $sum += (int)$array[$i];
}
print $sum;
?>