<?php
$t = (int)fgets(STDIN);
for ($i=0;$i<$t;$i++){
	$number = (int)fgets(STDIN);
	$digits = str_split((string)$number);
	$count = 0;
	foreach ($digits as $digit) {
		if ($digit != 0 && $number % $digit == 0)
			$count ++;
	}
	echo $count.PHP_EOL;
}
