<?php
$n = (int)fgets(STDIN);
for ($i=0;$i<$n;$i++){
	list($t[$i]['N'], $t[$i]['K']) = array_map("intval", explode(" ", fgets(STDIN)));
	$t[$i]['Ss'] = array_map("intval", explode(" ", fgets(STDIN), $t[$i]['N']));
	sort($t[$i]['Ss']);
	$assistance = 0;
	foreach ($t[$i]['Ss'] as $ss) {
		if ($ss > 0)
			break;
		$assistance ++;
	}
	print $assistance >= $t[$i]['K'] ? "NO\n" : "YES\n";
}