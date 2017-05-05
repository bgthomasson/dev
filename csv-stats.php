<?php
// statistics for data in CSV files

function csv_can_open() {
    $csv = fopen('data/bird.csv', 'r') or die("File can't be opened, debug plx");
    print '<p>I can read the file :D</p>';
    fclose($csv) or die("I kinna do that Cappn");
}

// let's test by printing 10 entries a la head/tail 

function csv_tail() {
    $csv = fopen('data/bird.csv', 'r') or die("File can't be opened, debug plx");
    print '<h3>Ten most recent entries</h3><ol>';
    //$line_count = count($csv);
    while($each_line = fgetcsv($csv)) {
        for ($i = 0; $i < 10; $i++) {
            print '<li>' . htmlentities($each_line[$i]) . '</li>';
        }
    }
    print '</ol>';
    fclose($csv) or die("I kinna do that Cappn");
}

// oops that fucked up
