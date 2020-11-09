var dicelist = [
"Cocktail",
"Animal",
"Pop Culture Property",
"Animal Crossing Resident",
"Pok&eacute;mon",
"D&D Class",
"Homestuck Troll Romance",
"Hollow Knight Character"
];

var number_of_dice = dicelist.length;

$( document ).ready(function() {
    var dice = $("#dice")[0];
	for (i = 1; i <= number_of_dice; i++){
		dice.innerHTML = dice.innerHTML + `
<div class="container p-3">
<div class="text-center border" id="`+ i +`">
&nbsp;
</div>
<a class="btn btn-fluid btn-primary btn-block" onclick="roll(`+ i +`);">`+ dicelist[i-1] +`
</a>
</div>
`;
dice.innerHTML = dice.innerHTML + "</div>";
	}
});


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function roll_all(){
		 for (i = 1; i <= number_of_dice; i++) {
			 roll(i);
		 }
}

function roll(x){
		var result = "";
	switch(x){
	case 1:
		result = cocktails[getRndInteger(0,cocktails.length-1)];
		break;
	case 2:
		result = animals[getRndInteger(0,animals.length-1)];
		break;
	case 3:
		result = pop_culture_properties[getRndInteger(0,pop_culture_properties.length-1)];
		break;
	case 4:
		result = animal_crossing_villagers[getRndInteger(0,animal_crossing_villagers.length-1)];
		break;
	case 5:
		result = pokemon[getRndInteger(0,pokemon.length-1)];
		break;
	case 6:
		result = dndclass[getRndInteger(0,dndclass.length-1)];
		break;
	case 7:
		result = homestuck_troll_romance[getRndInteger(0,homestuck_troll_romance.length-1)];
		break;
	case 8:
		result = hollow_knight_character[getRndInteger(0,hollow_knight_character.length-1)];
		break;
	default:
		result = "";
		break;
	}
	document.getElementById(x).innerHTML = result;
}

