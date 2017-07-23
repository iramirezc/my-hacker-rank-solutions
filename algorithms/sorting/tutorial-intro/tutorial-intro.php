<?php
$V = (int)fgets(STDIN);
$n = (int)fgets(STDIN);
$ar = array_map("intval", explode(" ", fgets(STDIN), $n));
print array_search($V, $ar);
?>