<?php
list($a, $b, $n) = array_map("intval", explode(" ", fgets(STDIN)));
for ($i=3; $i<=$n; $i++){
	$fib = bcadd(strval(bcpow($b, '2')), strval($a));
	$a = $b;
	$b = $fib;
}
echo $fib;