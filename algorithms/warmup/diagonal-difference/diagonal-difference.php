<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$n = (int)fgets($_fp);
$matrix = array();
for ($i=0;$i<$n;$i++){
	array_push($matrix, explode(" ", fgets($_fp), $n));
}
$d1 = $d2 = 0;
for ($x=0; $x<$n; $x++){
	for ($y=0; $y<$n; $y++) { 
		if ($x == $y)
			$d1 += ($matrix[$x][$y]);
		if (($x + $y) == ($n-1))
			$d2 += ($matrix[$x][$y]);
	}
}
print abs($d1 - $d2);
fclose($_fp);
?>