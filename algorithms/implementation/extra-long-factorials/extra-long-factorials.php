<?php
$n = (int)fgets(STDIN);
for ($i=$n-1;$i>=1;$i--){
	$n = bcmul(strval($n), strval($i));
}
echo $n;