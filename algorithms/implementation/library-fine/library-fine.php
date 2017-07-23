<?php
$_fp = fopen("php://stdin", "r");
$actual = array_map("intval",explode(" ", fgets($_fp)));
$expected = array_map("intval", explode(" ", fgets($_fp)));
$fine = 0;
if ($actual[2] == $expected[2]){
	if($actual[1] == $expected[1]){
		if($actual[0] > $expected[0])
			$fine = ($actual[0] - $expected[0]) * 15;
	}elseif ($actual[1] > $expected[1]) {
		$fine = ($actual[1] - $expected[1]) * 500;
	}
}elseif ($actual[2] > $expected[2]) {
	$fine = 10000;
}
print $fine;
fclose($_fp);
?>