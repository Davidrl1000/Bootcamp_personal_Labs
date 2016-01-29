//Bottons
var addPersonalInformation = document.getElementById('submit-personal-information');
var addCreditCardInformation = document.getElementById('submit-card-information');
var returnToInit = document.getElementById('return-to-init');

///IDs
var personalInformationFormID = document.querySelector('#personal-information');
var creditCardInformationFormID = document.querySelector('#credit-card-information');

//Variables
var humanInformation = {};
var errorMessageEmptyField = '* This field must have a value.';
var errorMessageInvalidLength = '* Invalid length: ';

personalInformationFormID.addEventListener('input', function (e) {
 resetErrorMessages();
}, false);

creditCardInformationFormID.addEventListener('input', function (e) {
 resetErrorMessages();
}, false);

addPersonalInformation.addEventListener('click', function(){

	var userName = document.getElementById('user-name').value;
	var userEmail = document.getElementById('user-email').value;
	var userPhone = document.getElementById('user-phone').value;
	var userAddress = document.getElementById('user-address').value;

	if(validatePersonalInformation(userName,userEmail,userPhone,userAddress)){
		humanInformation.userName = userName;
		humanInformation.userEmail = userEmail;
		humanInformation.userPhone = userPhone;
		humanInformation.userAddress = userAddress;

		document.getElementById('personal-information').style.display = 'none';
		document.getElementById('credit-card-information').style.display = 'block';

		//reset inputs
		document.getElementById('user-name').value = '';
		document.getElementById('user-email').value = '';
		document.getElementById('user-phone').value = '';
		document.getElementById('user-address').value = '';
	}
	
});

addCreditCardInformation.addEventListener('click', function(){

	var cardName = document.getElementById('card-name').value;
	var cardNumber = document.getElementById('card-number').value;
	var cardDate = document.getElementById('card-date').value;
	var cardCCV = document.getElementById('card-ccv').value;

	if(validateCreditCardInformation(cardName,cardNumber,cardDate,cardCCV)){

		humanInformation.cardName = cardName;
		humanInformation.cardNumber = cardNumber;
		humanInformation.cardDate = cardDate;
		humanInformation.cardCCV = cardCCV;

		document.getElementById('credit-card-information').style.display = 'none';
		document.getElementById('checkout-information').style.display = 'block';

		//reset inputs
		document.getElementById('card-name').value = '';
		document.getElementById('card-number').value = '';
		document.getElementById('card-date').value = '';
		document.getElementById('card-ccv').value = '';
		resetErrorMessages();

		createHTMLCheckoutInformation();

		function createHTMLCheckoutInformation(){

			var human = humanInformationCheckout();

			var container = document.getElementById('human-information');

			//Creating li element
			var elementName = document.createElement('li');
			var elementEmail = document.createElement('li');
			var elementPhone = document.createElement('li');
			var elementAddress = document.createElement('li');
			var elementCardName = document.createElement('li');
			var elementCardDate = document.createElement('li');
			var elementCardCCV = document.createElement('li');

			//Setting values to element
			elementName.appendChild(document.createTextNode(human.name()));
			elementEmail.appendChild(document.createTextNode(human.email()));
			elementPhone.appendChild(document.createTextNode(human.phone()));
			elementAddress.appendChild(document.createTextNode(human.address()));
			elementCardName.appendChild(document.createTextNode(human.cardName()));
			elementCardDate.appendChild(document.createTextNode(human.cardDate()));
			elementCardCCV.appendChild(document.createTextNode(human.cardCCV()));

			//Adding data to content
			container.appendChild(elementName);
			container.appendChild(elementEmail);
			container.appendChild(elementPhone);
			container.appendChild(elementAddress);
			container.appendChild(elementCardName);
			container.appendChild(elementCardDate);
			container.appendChild(elementCardCCV);

		}//end createHTMLCheckoutInformation
		
	}//end if

});

returnToInit.addEventListener('click', function(){

	humanInformation = {};
	document.getElementById('checkout-information').style.display = 'none';
	document.getElementById('personal-information').style.display = 'block';

});

function resetErrorMessages(){
	document.getElementById("error").innerHTML = '';
	document.getElementById("error-user-name").innerHTML = '';
	document.getElementById("error-user-email").innerHTML = '';
	document.getElementById("error-user-phone").innerHTML = '';
	document.getElementById("error-user-address").innerHTML = '';
	document.getElementById("error-card-name").innerHTML = '';
	document.getElementById("error-card-number").innerHTML = '';
	document.getElementById("error-card-valid").innerHTML = '';
	document.getElementById("error-card-ccv").innerHTML = '';
}

function humanInformationCheckout() {
  return {
    name: function() {
      return 'Name: ' + humanInformation.userName;
    },
    email: function() {
      return 'Email:' + humanInformation.userEmail;
    },
    phone: function() {
      return 'Phone:' + humanInformation.userPhone;
    },
    address: function() {
      return 'Address:' + humanInformation.userAddress;
    },
    cardName: function() {
      return 'Card Name: ' + humanInformation.cardName;
    },
    cardNumber: function() {
      return 'Card Number:' + humanInformation.cardNumber;
    },
    cardDate: function() {
      return 'Card Date:' + humanInformation.cardDate;
    },
    cardCCV: function() {
      return 'CCV:' + humanInformation.cardCCV;
    }
  };
}//end humanInformationCheckout

function validatePersonalInformation(userName,userEmail,userPhone,userAddress){

	if(isEmpty(userName)){
		document.getElementById("error-user-name").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(userName,5,20)){
		document.getElementById("error-user-name").innerHTML = errorMessageInvalidLength + 'length >= 5 && length <= 20';
		return false;
	}

	if(isEmpty(userEmail)){
		document.getElementById("error-user-email").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(userEmail,7,20)){
		document.getElementById("error-user-email").innerHTML = errorMessageInvalidLength + 'length >= 7 && length <=20';
		return false;
	}else if(!validateEmail(userEmail)){
		document.getElementById("error-user-email").innerHTML = 'Invalid email, please writa a valid email.'
		return false;
	}

	if(isEmpty(userPhone)){
		document.getElementById("error-user-phone").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(userPhone,8,12)){
		document.getElementById("error-user-phone").innerHTML = errorMessageInvalidLength + 'length >= 8 && length <= 12';
		return false;
	}

	if(isEmpty(userAddress)){
		document.getElementById("error-user-address").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(userAddress,20,30)){
		document.getElementById("error-user-address").innerHTML = errorMessageInvalidLength + 'length >= 20 && length <= 30';
		return false;
	}

	return true;

}//end validatePersonalInformation

function validateCreditCardInformation(cardName,cardNumber,cardDate,cardCCV){

	if(isEmpty(cardName)){
		document.getElementById("error-card-name").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(cardName,5,20)){
		document.getElementById("error-card-name").innerHTML = errorMessageInvalidLength + 'length >= 5 && length <= 20';
		return false;
	}

	if(isEmpty(cardNumber)){
		document.getElementById("error-card-number").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(cardNumber,7,20)){
		document.getElementById("error-card-number").innerHTML = errorMessageInvalidLength + 'length >= 7 && length <= 20';
		return false;
	}

	if(isEmpty(cardDate)){
		document.getElementById("error-card-valid").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!validDateNowOrFuture(cardDate)){
		document.getElementById("error-card-valid").innerHTML = 'Please enter a valid date.';
		return false;
	}

	if(isEmpty(cardCCV)){
		document.getElementById("error-card-ccv").innerHTML = errorMessageEmptyField;
		return false;
	}else if(!hasCorrectLength(cardCCV,3,5)){
		document.getElementById("error-card-ccv").innerHTML = errorMessageInvalidLength + 'length >= 3 && length <= 5';
		return false;
	}

	return true;

}//end validateCreditCardInformation