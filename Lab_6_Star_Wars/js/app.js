var getCharacterButton = document.querySelector('#get-character-button');
var characterNumberField = document.querySelector('#character-number');
var error = displayError('Error!!!!');

characterNumberField.addEventListener('input', function (e) {
 document.querySelector('#error').innerHTML = '';
 document.querySelector('#character-pic').src = '';
}, false);

getCharacterButton.addEventListener('click', function(){

	var characterNumberValue = characterNumberField.value;

	if (isEmpty(characterNumberValue)) {
		error('You must write the number of your birthday!');
	}else if(!isValidMonthNumber(characterNumberValue)){
		error('That is not a day of the month -_-!');
	}else{
		searchCharacter(characterNumberValue, $('input[name="gender"]:checked').val());
	}
	
});

function showData(data,picImage){
	document.querySelector('#character-name').innerHTML = data.name;
	document.querySelector('#birth-year').innerHTML = 'Birth year: '+data.birth_year;
	document.querySelector('#character-pic').src = picImage;
}

function displayError(data){
	return function(message) {
		document.querySelector('#error').innerHTML = data+' '+message;
		document.querySelector('#character-pic').src = 'img/error_chewaca.png';
	};
}