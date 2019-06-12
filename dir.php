<!DOCTYPE html>
<html> 
<head>
    <meta charset="utf-8" />
    <title>directory listing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <style type="text/css">
    body {
        background-color: #314159;
        font-family: Merriweather, Cambria, serif;
        font-size: 1.2em;
        line-height: 1.5;
        margin: 0 auto;
        max-width: 24em;
    }
    table {
        background-color: #c5cacf;
        border-collapse: collapse; 
    }
    td {
        border-top: 3px solid #6d7993;
        padding: 0.5em;
        font-family: 'Oxygen Mono', 'DejaVu Sans Mono', Consolas, monospace;
    }
    th {
        text-align: left;
    }
    a {
        text-decoration: none;
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
        $modtime = date("Y-m-d", $file->getMTime());
        print '<tr><td><a href="' . $filename . '">' . $filename . '</a></td><td> ' . $modtime . ' </td></tr>';
    }
}
// what it NEEDs to do is basic SQL: SORT BY last modified 
// Why does it output in random order? Not alpha, date, or size related. 
?>
</table>
</body>
</html>