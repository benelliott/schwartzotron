var createName = function(){
	return capitaliseFirst(createWord(true)) + ' ' + capitaliseFirst(createWord(false));
};

var createWord = function(firstName) {
	var syllables = Math.floor(Math.random() * 4);
	if (syllables < 1)
		syllables = 1;
	var extend = Math.floor(Math.random() * syllables);
	var word = '';
	for (var i = 0; i < syllables; i++) {
		word += getNoise();
		if (firstName && i == extend) {
			word += repeat(getVowel(), 4);		
		}
		else
			word += getVowel();
		word += getNoise();
	}
	return word;
};

var noises = ['ch', 'sh', 'p', 'f', 'b', 'z', 's', 'g', 'y', 'ph', 'r', 'd', 'l', 'm', 'n', 't', 'w'];

var getNoise = function() {	
	var index = Math.floor(Math.random() * noises.length);
	return noises[index];
};

var vowels = ['a', 'e', 'i', 'o', 'u'];

var getVowel = function() {
	var index = Math.floor(Math.random() * vowels.length);
	return vowels[index];
};

var repeat = function(string, reps) {
	var repeats = '';
	for (var i = 0; i < reps; i++) {
		repeats += string;
	}
	return repeats;
};

var capitaliseFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(createName());
