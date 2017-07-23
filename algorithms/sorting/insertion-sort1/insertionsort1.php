<?php
function insertionSort($ar){
    $val = end($ar); // Get last value
    $i = count($ar) - 1;
    do{
        $ant = $i - 1;
        if ($ant >= 0){
            if ($ar[$ant] > $val){
                $ar[$i] = $ar[$ant];
            }else{
                $ar[$i] = $val;
                $i = 0;
            }
        }else{
            $ar[0] = $val;
        }
        printArray($ar);
        $i--;
    }while($i >= 0);
}

function printArray($ar){
    end($ar); // Move to the end 
    $last = key($ar); // Get index
    foreach ($ar as $k => $i){
        print $i;
        print $k != $last ? " " : "\n";
    }
}

fscanf(STDIN, "%d", $V);
$ar = array_map("intval", explode(" ", fgets(STDIN), $V));
for($i=0;$i < count($ar);$ar[$i++]+=0);
insertionSort($ar);
?>
