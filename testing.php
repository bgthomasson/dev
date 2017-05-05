<?php
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

require_once('csv-stats.php');
require_once('math.php');

?>

<!DOCTYPE html>
<html> 
<head>
    <meta charset="utf-8" />
    <title>PHP7 tests</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <link rel="stylesheet" type="text/css" media="all" href="css/hummingbird.css" />
</head>
<body>

<h1>PHP7</h1>

<article>
    <p>
        I was reading "Upgrading to PHP7", and saw a function called intdiv(), 
        that's the opposite of the modulo operator. However, their example  
        intdiv(8, 3) returns the same result as 8 % 3. I'm no math expert but 
        it made me wonder how many integers produce the same result. 
    </p>
    <p>
        While pondering how to write it, I realized it's multi-dimensional: 
        you have two sets of numbers like with a times table. 
        It would have to cycle thru like- 1 / 1, 1/2, 1/3, ... 1/100, 2/1, 2/2, ... 
        so two layers of incrementation. 

    </p>
    <?php

    ?>

</article>

<article>
    <h2>Output results from a CSV</h2>

    <?php 
        csv_can_open(); 
    ?>

    <p>
        Uh, umm, well I thought this would be easier, should be the title of my biography. 
        Maybe I should try Python or find a library. 
    </p>

</article>

<article>
    <?php 
        random_bytes(16);
        random_int(1280);
    ?>
</article>

</body>
</html>