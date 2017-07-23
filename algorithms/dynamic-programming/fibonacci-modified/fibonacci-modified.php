<?php
$abn = array_map("intval", explode(" ", fgets(STDIN)));
$a = $abn[0];
$b = $abn[1];
$n = $abn[2];
$fib = 0;
for ($i=3;$i<=$n;$i++){
	$fib = bcadd(strval(bcpow($b, '2')), strval($a));
	$a = $b;
	$b = $fib;
}
echo $fib;