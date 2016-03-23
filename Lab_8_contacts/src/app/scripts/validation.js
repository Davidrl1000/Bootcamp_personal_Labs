function isEmpty(value){

	if(value === null){
		return true;
	}else if(value === undefined){
		return true;
	}else if(value.length <= 0){
		return true;
	}else{
		return false;
	}//end if-else

}//end isEmpty

function hasCorrectLength(value, minimunSize, maximunSize){

	if(minimunSize === null){
		minimunSize = 0;
	}

	if(maximunSize === null){
		maximunSize = 0;
	}

	if(value === null){
		return false;
	}else if(minimunSize != 0 && maximunSize !=0){
		if(value.length >= minimunSize && value.length<=maximunSize){
			return true;
		}else{
			return false;
		}
	}else if(minimunSize === 0){
		if(value.length<=maximunSize){
			return true;
		}else{
			return false;
		}
	}else if(maximunSize === 0){
		if(value.length >= minimunSize){
			return true;
		}else{
			return false;
		}
	}//end if-else

	return false;

}//end isEmpty

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validDateNowOrFuture(userDate){

	if(isEmpty(userDate)){
		return false;
	}

	if ((new Date().getYear()+1900) > parseInt(userDate.substr(0,4))) {
	  	return false;
	}else if((new Date().getYear()+1900) === parseInt(userDate.substr(0,4)) && getMonth() > parseInt(userDate.substr(5,6))){
		return false;
	}
	return true;
}//end validDateNowOrFuture

function getMonth(){

	var month = new Date().getMonth()+1;

	if(month < 10){
		return parseInt('0'+month);
	}else{
		return month;
	}

}//END getMonth

function isValidMonthNumber(number){
	if(number === null){
		return false;
	}else if(number < 1 || number > 31){
		return false;
	}else{
		return true;
	}
}
