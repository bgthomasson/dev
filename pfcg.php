<?php
Namespace Dev;

mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

require __DIR__ . './vendor/autoload.php';
error_reporting(E_ALL);
$environment = 'development';
$whoops = new \Whoops\Run;

if ($environment !== 'production') {
    $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
} else {
    $whoops->pushHandler(function($e){
        echo 'Friendly error page and send an email to the developer';
    });
}
$whoops->register();

// lazy lazy
// generate: radios
// output: abilities, skills, feats, specab, charname, hp, alignment, speeds
// validate: textbox, radios, 

function generate_radios($purpose){
    print "<fieldset>";
    print "<legend>$purpose</legend>";
    // grab data source with that name, put into array, spit out radio buttons
    
    print "<label for="$item">
    <input type="radio" name="$purpose" id="$item" value="$item" /> 
    ucfirst($item) $description_short
    </label>";
    
    print "</fieldset>";
}

function output_abilities() {
    print "<table><tr><th>Ability</th><th>Score</th><th>Modifier</th></tr>";
    // put the error report IN this table ???
    // looop-
    print "<tr><td>$ability</td> <td>$ability_score</td> <td>$ability_mod</td></tr>";
    
    print "</table>";
}

function output_skills() {
    print "<table><tr><th>SKILL</th><th>Ability mod.</th><th>Misc mod.</th></tr>";
    
    // needs sub-loop to add class="class-skill" to <tr> where appropriate
    // loop this out 
    print "<tr> <td>$skill</td> <td>$ability_mod</td> <td>$skill_misc_mods</td> </tr>";
    
    print "</table>";
}

function output_feats() {
    print "<h3>Feats</h3>":
    
    
}

function output_special_abs() {
    print "<h3>Special Abilities</h3>";
    
    
}

$charname = htmlentities($_POST['charname'], ENT_QUOTES, 'UTF-8');
$hp = $hitdie;
$alignment = strtoupper($_POST['alignment']);

/* health level up
function getHealthy($hp, $hitdie) {
  $hp += mt_rand(2, $hitdie);
  return hp;
}
*/


?>

<!DOCTYPE html>
<html lang="en-US"> 
<head>
    <meta charset="utf-8" />
    <title>Pathfinder Character Generator PHP</title>
    <link rel="stylesheet" media="all" href="css/pathfinder.css" />
</head>
<body>

<h1>Pathfinder Character Generator</h1>

<main>
<form name="pfcg" action="pfcg.php" method="POST">
<fieldset>
<label for="charname">
    Name 
    <input type="text" name="charname" size="26" required >
</label>

<label for="alignment">
    Alignment 
    <select name="alignment">
        <option value="lg">Lawful Good</option>
        <option value="ln">Lawful Neutral</option>
        <option value="le">Lawful Evil</option>
        <option value="ng">Neutral Good</option>
        <option value="nn">Neutral Neutral</option>
        <option value="ne">Neutral Evil</option>
        <option value="cg">Chaotic Good</option>
        <option value="cn">Chaotic Neutral</option>
        <option value="ce">Chaotic Evil</option>
    </select>
</label>

</fieldset>

<?php generate_radios($race); ?>

<?php generate_radios($classes); ?>

<button type="submit" name="create" id="create">Create your ref sheet!</button>

</form>

<!-- --------------------------------------------------------------------- -->
<?php 
print "<article><h2>$charname</h2>
<table>
    <tr><td>HP</td><td>$hp</td></tr>
    <tr><td>Alignment</td><td>$alignment</td></tr>
    <tr><td>Speed</td><td>$speed_base</td></tr>
    <tr><td>Swim</td><td>$speed_swim</td></tr>
    <tr><td>Climb</td><td>$speed_climb</td></tr>
</table>";

output_abilities(); 

output_skills(); 

output_feats(); 

output_special_abs(); 

print "</article>
</main>
</body>
</html>";