function getCharacter(gender) {

	var currentID;

	function handleData(data) {

		if(isValidGender(data.gender)){
			console.log(data);
			displayInformation(data,currentID);
		}else{
			init(nextNumber());
		}

	}

	function handleError(xhr, ajaxOptions, thrownError) {
	    //catchError(xhr.status+' - '+thrownError);
	    init(nextNumber());
	}

	function isValidGender(characterGender){
		if(characterGender === gender){
			return true;
		}else{
			return false;
		}
	}//end isValidGender

	function nextNumber(){

		if(currentID === 32){
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

	}

	return {
		init: init
	};

}

