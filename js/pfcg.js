
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#create')[0].on('click', generateCharacterSheet);

// math section:
// define all attributes and skills at default level one values
// which is easy, skills are 0 and atts are... hmm... uh oh.
// make a random att generator??? that can fudge based on race and class.

// misc things

var hitdie; // assigned by class 

var speed_base = 30; //unless modified by race
var speed_fly = 0; // only winged creatures like gryphon, tengu, dragon, etc
var speed_swim = 10;
var speed_climb = 10;

var size = 'Med'; // most of these are

// skills all set to 0
var acro = 0;
var appraise = 0;
var bluff = 0;
var climb = 0;
var craft = 0;
var diplomacy = 0;
var disdev = 0;
var disguise = 0;
var esc = 0;
var fly_skill = 0;
var handle_animal = 0;
var heal = 0;
var intimidate = 0;
var k_arcana = 0;
var k_dung = 0;
var k_eng = 0;
var k_geo = 0;
var k_hist = 0;
var k_local = 0;
var k_nature = 0;
var k_nob = 0;
var k_planes = 0;
var k_rel = 0;
var ling = 0;
var perc = 0;
var perform = 0;
var profession = 0;
var ride = 0;
var sense_motive = 0;
var sleight = 0;
var spellcraft = 0;
var stealth = 0;
var survival = 0;
var swim = 0;
var umd = 0;

// create an array for class skills, feats, special abilities
var classSkillArray = [];
var featArray = [];
var specialAbilityArray = [];


function generateCharacterSheet() {

// ALL of this stuff up top needs to be put into other function(s)

// this can be one function

	// race and class, which might be reserved so alias...
  var race = 'race';
	var role = 'role';
  
	// find what's been selected
  
	var rolecheck = document.kcg.elements[role];
   for(var i = 0; i < rolecheck.length; i++) {
      if(rolecheck[i].checked) { 
        role = rolecheck[i].value;
      }
      // else ???
   }   
   
	var racecheck = document.kcg.elements[race];
   for(var i = 0; i < racecheck.length; i++) {
      if(racecheck[i].checked) {
        race = racecheck[i].value;
      }
      // else ???
   }
	
  switch (race) {
    case 'human' :
      // everything is average...
      
    break;
    
    case 'dwarf':
      con += 2;
      wis += 2;
      cha -= 2;
      speed_base = 20;
      appraise += 2;
      specialAbilityArray.push("darkvision 60ft");
      
		break;
    
    case 'orc':
      str += 2;
      intelligence -= 2;
      wis -= 2;
      cha -= 2;
      
		break;
    
    case 'kobold' :
      str -= 4;
      con -= 2;
      dex += 2;
      size = "Small";
      craft = "2 trapmaking";
      profession = "2 mining";
      classSkillArray.push("craft", "stealth");
    break;
    
    case 'tengu':
      dex += 2;
      con -= 2;
      wis += 2;
      perception += 2;
      stealth += 2;
      linguistics +=4;
      
		break;
    
    case 'kernuni':
      cha += 2;
      heal += 2;
      specialAbilityArray.push("unicorn horn");
      
		break;
    
    case 'yuanren':
      dex += 2;
      perc += 2;
      stealth +=2;
      speed_climb = 30;
      specialAbilityArray.push("prehensile tail");
      
		break;
    
    case 'bovini':
      str += 2;
      dex -= 2;
      intimidate += 2;
      survival += 2;
      size = 'Large';
      speed_base = 25;
      
		break;
    
    default:
    break;
  }
  
	// make changes depending on role chosen
	switch (role) {
		case 'barbarian':
      classSkillArray.push("acro");
      classSkillArray.push("climb");
      classSkillArray.push("craft");
      classSkillArray.push("handle_animal");
      classSkillArray.push("intimidate");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 12;
		break;
    
    case 'bard':
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 8;
		break;
    
    case 'cleric':
      classSkillArray.push();
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 8;
		break;
    
    case 'druid':
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 8;
		break;
    
    case 'fighter':
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 10;
		break;
    
    case 'monk':
      classSkillArray.push();
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 8;
		break;
    
    case 'paladin':
      classSkillArray.push();
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 10;
		break;
    
    case 'ranger':
      classSkillArray.push();
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 10;
		break;
    
    case 'rogue':
      classSkillArray.push("acro");
      classSkillArray.push("appraise");
      classSkillArray.push("bluff");
      classSkillArray.push("climb");
      classSkillArray.push("craft");
      classSkillArray.push("diplomacy");
      classSkillArray.push("disable_device");
      classSkillArray.push("disguise");
      classSkillArray.push("esc");
      classSkillArray.push("intimidate");
      classSkillArray.push("k_dung");
      classSkillArray.push("k_local");
      classSkillArray.push("linguistics");
      classSkillArray.push("perception");
      classSkillArray.push("perform");
      classSkillArray.push("profession");
      classSkillArray.push("sense_motive");
      classSkillArray.push("sleight");
      classSkillArray.push("stealth");
      classSkillArray.push("swim");
      classSkillArray.push("umd");
      hitdie = 8;
		break;
    
    case 'sorcerer':
      classSkillArray.push();
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 6;
		break;
    
    case 'wizard':
      classSkillArray.push();
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      classSkillArray.push("");
      hitdie = 6;
		break;
    
		default:
		break;
	}
	
  
  //-------------------------------------------------------------------------//
  // OUTPUT RESULTS which should be the only thing in generate function...
  // MAKE SURE THAT VAR NAMES FOR HTML INPUT AND OUTPUT DO NOT CONFLICT ! ! ! !

  var charname = document.getElementById('charname');
  charname_output.textContent = charname.value;
  
  var align = document.getElementById('alignment');
  align_output.textContent = align.value;

	document.getElementById('str_output').textContent = str;
  document.getElementById('dex_output').textContent = dex;
  document.getElementById('con_output').textContent = con;
  document.getElementById('int_output').textContent = intelligence;
  document.getElementById('wis_output').textContent = wis;
  document.getElementById('cha_output').textContent = cha; 

  var acro_row_output = getElementById('acro_row_output');
	acro_row_output.innerHTML = "<td>Acrobatics</td><td>" + acro_am_output 
      + "</td><td>" + acro_misc_output + "</td>";
  var _row_output = getElementById('_row_output');
	_row_output.innerHTML = "<td></td><td>" + _am_output 
      + "</td><td>" + _misc_output + "</td>";
  // yeah this is the part I really want automated!!!
  
  
  
  
  
}

//EOF