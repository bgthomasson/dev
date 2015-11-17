// it works so start breaking into modules

var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#create')[0].on('click', generateCharacterSheet);

// define all attributes and skills at default level one values
var strength = 35;
var wisdom = 30;
var endurance = 35;
var charisma = 40;
var intelligence = 40;
var agility = 50;
var luck = 40;
var speed = 30;
var health = 100;
var magicka = 50;
var stamina = 150;
var alteration = 10;
var conjuration = 10;
var destruction = 10;
var illusion = 10;
var restoration = 10;
var enchantment = 10;
var archery = 10; 
var block = 10;
var heavyarmor = 10;
var onehanded = 10;
var twohanded = 10;
var unarmed = 15;
var acrobatics = 25;
var disguise = 10;
var lightarmor = 15;
var fraud = 10;
var security = 15;
var sneak = 20;
var alchemy = 10;
var speech = 10;
var survival = 15;
var handcraft = 20;
var perform = 10;
var smith = 10;

var role = 'role';
var morph = 'morph';

function generateCharacterSheet() {
	
  // is it logical to have this bit in this function? 
  
	var rolecheck = document.kcg.elements[role];
   for(var i = 0; i < rolecheck.length; i++) {
      if(rolecheck[i].checked) { 
        role = rolecheck[i].value;
      }
   }   
   
	var morphcheck = document.kcg.elements[morph];
   for(var i = 0; i < morphcheck.length; i++) {
      if(morphcheck[i].checked) {
        morph = morphcheck[i].value;
      }
   }
	
	//help from http://www.javascript-coder.com/javascript-form/javascript-get-check.phtml
	//and http://www.openjs.com/tutorials/advanced_tutorial/choices.php
	// as there is a dearth of info on using radio buttons with JS
	
	// make changes depending on role chosen
	switch (role) {
		case 'magic':
      wisdom += 10;
      magicka +=50;
      alteration += 10;
      conjuration += 10;
      destruction += 10;
      illusion += 10;
      restoration += 10;
      enchantment += 10;
      alchemy += 10;
		break;
		case 'combat':
      strength +=10;
      health += 50;
      archery += 10;
      block += 10;
      heavyarmor += 10;
      onehanded += 10;
      twohanded += 10;
      unarmed += 10;
      smith += 10;
		break;
		case 'stealth':
      agility += 10;
      stamina += 50;
      acrobatics += 10;
      disguise += 10;
      lightarmor += 10;
      fraud += 10;
      security += 10;
      sneak += 10;
      archery += 10;
		break;
		case 'craft':
      luck += 10;
      intelligence += 10;
      alchemy += 10;
      speech += 10;
      survival += 10;
      handcraft += 10;
      perform += 10;
      smith += 10;
      unarmed += 10;
		break;
		default:
		break;
	}
	
	// make changes depending on morph chosen
	switch (morph) {
		case 'ohmes':
      charisma += 5;
      strength -= 5;
      disguise += 10;
		break;
		case 'dagi':
      wisdom += 10;
      strength -= 10;
      magicka += 10;
      sneak += 10;
      acrobatics += 5;
		break;
		case 'cathay':
      strength += 5;
      agility -= 5;
      stamina += 10;
		break;
		case 'alfiq':
      agility += 10;
      strength -= 10;
      unarmed += 5;
      sneak += 10;
      archery = 0;
      handcraft = 0;
      onehanded = 0;
      smith = 0;
      twohanded = 0;
      security = 0;
		break;
		case 'pahmar':
      strength +=5;
      unarmed += 10;
      speed += 10;
      archery = 0;
      handcraft = 0;
      onehanded = 0;
      smith = 0;
      twohanded = 0;
		break;
		case 'senche':
      strength += 10;
      agility -= 10;
      unarmed += 15;
      health += 10;
      archery = 0;
      handcraft = 0;
      onehanded = 0;
      smith = 0;
      twohanded = 0;
		break;
		default:
		break;
	}
  
	//---------------------------------------------------------------------------
	// grab the elements we want to print results to:
  
  var outputs = document.getElementById('outputs');
  var charname = document.getElementById('charname');
  var attributes1 = document.getElementById('attributes1');
  var attributes2 = document.getElementById('attributes2');
  var rolecall = document.getElementById('rolecall');
  var skills_magic = document.getElementById('skills_magic');
  var skills_combat = document.getElementById('skills_combat');
  var skills_rogue = document.getElementById('skills_rogue');
  var skills_craft = document.getElementById('skills_craft');
  var morph_abilities = document.getElementById('morph_abilities');
  var inventory = document.getElementById('inventory');
  var spells1 = document.getElementById('spells1');
  var spells2 = document.getElementById('spells2');
  
  // and then do the do
  
  charname.textContent = kcg.charname.value;
  
	attributes1.innerHTML = "<td>" + health + "</td><td>" + magicka + "</td><td>" 
    + stamina + "</td><td>" + speed + "</td><td>" + morph + "</td><td>" 
    + kcg.charage.value + "</td><td>" + kcg.chargend.value + "</td>";
  
	attributes2.innerHTML = "<td>" + strength + "</td><td>" + wisdom + "</td><td>" 
    + endurance + "</td><td>" + charisma + "</td><td>" + intelligence + "</td><td>" 
    + agility + "</td><td>" + luck + "</td>";
  
  rolecall.textContent = role;
	// the skills table 
	skills_magic.innerHTML = "<td>" + alteration + "</td><td>" + conjuration + "</td><td>" 
    + destruction + "</td><td>" + illusion + "</td><td>" + restoration + "</td><td>" 
    + enchantment + "</td>";
  
	skills_combat.innerHTML = "<td>" + archery + "</td><td>" + block + "</td><td>" 
    + heavyarmor + "</td><td>" + onehanded + "</td><td>" + twohanded + "</td><td>" 
    + unarmed + "</td>";
  
	skills_rogue.innerHTML = "<td>" + acrobatics + "</td><td>" + disguise + "</td><td>" 
    + lightarmor + "</td><td>" + fraud + "</td><td>" + security + "</td><td>" + sneak 
    + "</td>";
  
	skills_craft.innerHTML = "<td>" + alchemy + "</td><td>" + speech + "</td><td>" 
    + survival + "</td><td>" + handcraft + "</td><td>" + perform + "</td><td>" 
    + smith + "</td>";

  // special morph abilities
		switch (morph) {
		case 'ohmes':
		  morph_abilities.textContent = 'As an Ohmes, you have Claws (8 pt).';
		break;
		case 'dagi':
		  morph_abilities.textContent = 'As a Dagi, you have Bite (6 points) and Claws (8 pt).';
		break;
		case 'suthay':
		  morph_abilities.textContent = 'As a Suthay, you have Bite (8 pt) and Claws (12 pt).';
		break;
		case 'cathay':
		  morph_abilities.textContent = 'As a Cathay, you have Bite (10 points) and Claws (15 pt).';
		break;
		case 'alfiq':
		  morph_abilities.textContent = 'As an Alfiq you have Bite (6 points) and Claws (6 pt). ' 
      + 'You are unable to speak anything but Miu, but you can understand speech. ' 
      + 'As a quadruped, you cannot use skills that require opposable thumbs.';
		break;
		case 'pahmar':
		  morph_abilities.textContent = 'As a Pahmar, you have Bite(20 points) and Claws (18 pt). ' 
      + 'As a quadruped, you cannot use skills that require opposable thumbs.';
		break;
		case 'senche':
		  morph_abilities.textContent = 'As a Senche, you have Bite (30 points) and Claws(25 pt). '
      + 'As a quadruped, you cannot use skills that require opposable thumbs.';
		break;
		default:
		break;
	}
	
// spells known- if mage or other
		switch(role){
		case 'magic':
		  spells1.textContent = 'As a mage you have learned Heal Self; Shield (10 Points); ' 
      + 'Candlelight; Courage; and your choice of Flames, Frost, or Sparks.';
		break;
		default:
		  spells1.textContent = 'All non-mages are taught Heal Self (Restore HP and SP 10 points for 1 second).';
		break;
	}
  
// spells known by each morph
		switch (morph) {
		case 'dagi':
		  spells2.textContent = 'As a Dagi, regardless of role you know Heal Other (5 points), '
      + 'Shield (10 points), and Chameleon (10 percent).';
		break;
		case 'alfiq':
		  spells2.textContent = 'As an Alfiq has no hands, you have learned Telekinesis (5 pounds). '
      + 'Alfiq have the powers of Calming Purr and Eye of Kitten.';
		break;
		case 'pahmar':
		  spells2.textContent = 'As a Pahmar has no hands, you have learned Telekinesis (10 pounds).';
		break;
		case 'senche':
		  spells2.textContent = 'As a Senche has no hands, you have learned Telekinesis (15 pounds).';
		break;
		default:
		break;
	}
	
// inventory
	switch(role){
		case 'magic':
		  inventory.textContent = 'As a magic specialist, you have a tattered star covered robe '
      +'(+13 to magicka), socks that are two sizes too big, and a sweet roll.';
		break;
		case 'combat':
		  inventory.textContent = 'As a combat specialist, you have rusty iron chainmail, '
      + 'a big stick with a nail in it, and a ration of jerky.';
		break;
		case 'stealth': 
		  inventory.textContent = 'As a stealth specialist, you have greasy leather armor, a ski mask, and a lockpick.';
		break;
		case 'craft':
		  inventory.textContent = 'As a craft specialist, you have a dirty peasant shirt, yarn, a bag of seeds, and a shovel.';
		break;
		default:
		break;
	}
  
}

//EOF