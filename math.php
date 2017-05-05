<?php

function fizzbuzz(){
	$i = 1;
	$end = 50;
	
	for($i = 1; $i <= $end; $i++) {
		if(0 == $i % 3 && 0 == $i % 5) {
			echo'<span class="fizzbuzz">' . $i . ': FIZZBUZZ</span><br />';
		} else if(0 == $i % 3){
			echo "$i: Fizz<br />";
		} else if(0 == $i % 5){
			echo "$i: Buzz<br />";
		} else {
			echo "$i<br />";
		}
	}
}

// yes I did. 

function remainders(){
    // is the remainder of intdiv() the same as using modulo?
    $stop = 100;

    for($i = 1; $i < stop; $i++) {
        
    }
    
}

