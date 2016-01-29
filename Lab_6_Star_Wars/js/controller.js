function searchCharacter(id, gender) {
	
	var characterNumber = getCharacter(gender);

	characterNumber.init(id);

}//end searchCharacter

function displayInformation(data, picID){

	showData(data, 'img/'+picID+'.jpg');

}//end displayInformation

function catchError(error){

	showError(error);

}//end displayInformation