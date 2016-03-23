function getCharacter(gender) {

	var currentID;

	function handleData(data) {

		if(isValidGender(data.gender)){
			displayInformation(data,currentID);
		}else{
			init(nextNumber());
		}//en if-else

	}//end handleData

	function handleError(xhr, ajaxOptions, thrownError) {
	    init(nextNumber());
	}//end handleError

	function isValidGender(characterGender){
		if(characterGender === gender){
			return true;
		}else{
			return false;
		}
	}//end isValidGender

	function nextNumber(){

		if(currentID === 31){
			return 1;
		}else{
			return parseInt(currentID)+1;
		}//end if

	}//end nextNumber

	function init(id){

		currentID = id;

		var apiUrl = 'http://swapi.co/api/people/'+id;

	    $.ajax({
		        url : apiUrl,
		        type: 'GET',
		        success : handleData,
		        error:handleError
		    })

	}//end init

	return {
		init: init
	};

}//end getCharacter
