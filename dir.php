<!DOCTYPE html>
<html> 
<head>
    <meta charset="utf-8" />
    <title>directory listing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Overpass" rel="stylesheet"> 
    <style type="text/css">
    body {
        background-color: #314159;
        font-family: Merriweather, serif;
        font-size: 1.2em;
        line-height: 1.5;
        margin: 0 auto;
        max-width: 40em;
    }
    a,
    a:visited {
        color: #000;
    }
    table {
        background-color: #9099a2;
        border-collapse: collapse; 
    }
    tr:nth-of-type(even) {
        background-color: #6d7993;
    }
    td, th {
        padding: 0.5em;
        text-align: left;
    }
    </style>
</head>
<body>
<table>
<tr><th>File name</th><th>Last modified</th></tr>
<?php
foreach (new DirectoryIterator('.') as $file) {
    if ($file->isFile()) {
        $filename = htmlentities($file->getFilename()); 
        $viewtime = date("Y-m-d", $file->getATime());
        print '<tr><td><a href="' . $filename . '">' . $filename . '</a></td><td> ' . $viewtime . ' </td></tr>';
    }
}
?>
</table>
</body>
</html>