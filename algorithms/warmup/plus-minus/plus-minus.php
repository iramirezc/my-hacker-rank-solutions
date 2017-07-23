<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$n = (int)fgets($_fp);
$numbers = explode(" ", fgets($_fp), $n);
$positives = $negatives = 0;
for ($i=0; $i<count($numbers); $i++){
	if ($numbers[$i] > 0)
		$positives ++;
	elseif ($numbers[$i] < 0) 
		$negatives ++;
}
print number_format(($positives/$n), 3)."\n";
print number_format(($negatives/$n), 3)."\n";
print number_format((($n - ($positives + $negatives))/$n), 3);
fclose($_fp);
?>