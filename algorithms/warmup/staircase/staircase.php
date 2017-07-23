<?php
$_fp = fopen("php://stdin", "r");
/* Enter your code here. Read input from STDIN. Print output to STDOUT */
$num_stairs = (int)fgets($_fp);
for ($i=1;$i<$num_stairs+1;$i++){
	print str_repeat(" ", ($num_stairs - $i)).str_repeat("#", $i)."\n";
}
?>