//---------------------------------------------------------------------------||
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
$('#create')[0].on('click', generateCharacterSheet);

function isTextboxSet(txt) {  
  if(txt == null || txt.length == 0){
    return false;
  } else {
    return true;
  }
}

function validateRadio(radio) {
  for(var i = 0; i < radio.length; i++) {
    if(radio[i].checked) return true;
  }
  return false;
}

function generateCharacterSheet() {
  
  // ALL VARs FIRST ... 
  // race and class, which might be reserved so alias...
  var race = 'race';
  var role = 'role';

  // health
  var hitdie; // assigned by class 
  var hp; // determined with hitdie

  //abilities set at 10
  var str = 10;
  var dex = 10;
  var con = 10;
  var intelligence = 10;
  var wis = 10;
  var cha = 10;

  var speed_base = 30; //unless modified by race
  var speed_fly = 0; // right?
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
  // under the idea we can use that to mark them in the output table...
  var classSkillArray = [];
  var featArray = [];
  var specialAbilityArray = [];

// START WITH SMALL FUNCs

function getHealthy() {
  var hp1 = Math.floor(Math.random() * (hitdie + 1));
  var hp2 = Math.floor(Math.random() * (hitdie + 1));
  // you get two rolls and take the biggest, how nice.
  
  if (hp1 > hp2) hp = hp1;
  else hp = hp2;
  
  return hp;
}

//function chooseRace() {
	var racecheck = pfcg.elements[race];
  
  if(validateRadio(racecheck)){
   for(var i = 0; i < racecheck.length; i++) {
      if(racecheck[i].checked) {
        race = racecheck[i].value;
      }
    }
    error_race.textContent = "";
  } else {
    error_race.textContent = "You need to select a race.";
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
      classSkillArray.push("stealth");
      specialAbilityArray.push("craft trapmaking +2", "profession mining +2");
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
    
    default:
    break;
  }
//}

//function chooseRole() {
  // ROLE aka CLASS
  var rolecheck = pfcg.elements[role];
  
  if(validateRadio(rolecheck)){
    for(var i = 0; i < rolecheck.length; i++) {
      if(rolecheck[i].checked) { 
        role = rolecheck[i].value;
      }
    }
    error_role.textContent = "";
  } else {
    error_role.textContent = "You need to select a class.";
  }
   
	// make changes depending on role chosen
	switch (role) {
		case 'barbarian':
      classSkillArray.push("acro", "climb", "craft", "handle_animal", "intimidate", 
        "k_nature", "perc", "ride", "survival", "swim");
      specialAbilityArray.push("fast movement", "rage");
      hitdie = 12;
		break;
    
    case 'bard':
      classSkillArray.push("acro", "appraise", "bluff", "climb", "craft", 
        "diplomacy", "disguise", "esc", "intimidate", "ling", "perc", 
        "perform", "profession", "sense_motive", "sleight", "spellcraft", 
        "stealth", "umd");
      specialAbilityArray.push("bardic knowledge", "bardic performance", 
        "cantrips", "countersong", "distraction", "fascinate", "inspire courage");
      hitdie = 8;
		break;
    
    case 'cleric':
      classSkillArray.push("appraise", "craft", "diplomacy", "heal", "k_arcana", 
        "k_history", "k_nob", "k_planes", "k_religion", "ling", 
        "profession", "sense_motive", "spellcraft");
      specialAbilityArray.push("aura", "channel energy 1d6", "domains", "orisons", 
        "spontaneous casting");
      hitdie = 8;
		break;
    
    case 'druid':
      classSkillArray.push("climb", "craft", "fly_skill", "handle_animal", 
        "k_geography", "k_nature", "perception", "professsion", "ride", "spellcraft", 
        "survival", "swim");
      specialAbilityArray.push("nature bond", "nature sense", "orissons", "wild empathy");
      hitdie = 8;
		break;
    
    case 'fighter':
      classSkillArray.push("climb", "craft", "handle_animal", "intimidate", 
        "k_dung", "k_eng", "profession", "ride", "survival", "swim");
      specialAbilityArray.push("bonus feat");
      hitdie = 10;
		break;
    
    case 'monk':
      classSkillArray.push("acro", "climb", "craft", "esc", "intimidate", 
        "k_history", "k_religion", "perc", "perform", "profession", "ride", 
        "sense_motive", "stealth", "swim");
      specialAbilityArray.push("bonus feat", "flurry of blows", "stunning fist", 
        "unarmed strike");
      hitdie = 8;
		break;
    
    case 'paladin':
      classSkillArray.push("craft", "diplomacy", "handle_animal", "heal", 
        "k_nobility", "k_religion", "profession", "ride", "sense_motive", "spellcraft");
      specialAbilityArray.push("aura of good", "detect evil", "smite evil");
      hitdie = 10;
		break;
    
    case 'ranger':
      classSkillArray.push("climb", "craft", "heal", "intimidate", 
        "k_dung", "k_geo", "k_nature", "perc", "profession", "ride", 
        "spellcraft", "stealth", "survival", "swim");
      specialAbilityArray.push("1st favored enemy", "track", "wild empathy");
      hitdie = 10;
		break;
    
    case 'rogue':
      classSkillArray.push("acro", "appraise", "bluff", "climb", "craft", 
        "diplomacy", "disdev", "disguise", "esc", "intimidate", 
        "k_dung", "k_local", "ling", "perc", "perform", 
        "profession", "sense_motive", "sleight", "stealth", "swim", "umd");
      specialAbilityArray.push("sneak attack 1d6", "trapfinding");  
      hitdie = 8;
		break;
    
    case 'sorcerer':
      classSkillArray.push("appraise", "bluff", "craft", "fly", "intimidate", 
        "k_arcana", "profession", "spellcraft", "umd");
      specialAbilityArray.push("bloodline power", "cantrips", "eschew materials");
      hitdie = 6;
		break;
    
    case 'wizard':
      classSkillArray.push("appraise", "craft", "fly", "k_arcana", 
        "ling", "profession", "spellcraft");
      specialAbilityArray.push("arcane bond (familiar or bonded object)", 
        "arcane school", "cantrips", "scribe scroll");
      hitdie = 6;
		break;
    
		default:
		break;
	}
//}

  // print out their name
  var namecheck = pfcg.charname.value;
  
  if(isTextboxSet(namecheck)) {
    charname_output.textContent = namecheck;
    error_name.textContent = "";
  } else {
    error_name.textContent = "You have no name.";
  }
  
  
  // generate some hp
  getHealthy();
  hp_output.textContent = hp;
  
  // print out chosen alignment
  var align = pfcg.alignment.value;
  align_output.textContent = align;
  
  // stuff with abilities/attributes
  
	str_output.textContent = str;
  dex_output.textContent = dex;
  con_output.textContent = con;
  int_output.textContent = intelligence;
  wis_output.textContent = wis;
  cha_output.textContent = cha; 

  //skills!
  
  // run the alignment bonus func here
  // run some func that goes thru classSkillArray and adds class="class_skill"
  // to appropriate tr:first-child 
  
  var skillTable = getElementById(skill-table);
  document.body.appendChild(skillTable);
  for(i = 0; i < $numberOfSkills; i++){
    var skillRow = "<tr><td>"$skillname_output.innerHTML + "</td><td>" 
      + $skillname_am_output + "</td><td>"  + $skillname_misc_output 
      + "</td></tr>";
    skillTable.appendChild(skillRow);
  }
  // _row_output.innerHTML = "<td></td><td>" + _am_output + "</td><td>" + _misc_output + "</td>";

  
  
  // FEATS ETC. need to print out arrays properly
  
  feats_output.textContent = featsArray;
  specab_output.textContent = specialAbilityArray;
  
  
}

//EOF