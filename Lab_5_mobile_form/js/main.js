//Bottons
var addPersonalInformation = document.getElementById('submit-personal-information');
var addCreditCardInformation = document.getElementById('submit-card-information');
var returnToInit = document.getElementById('return-to-init');
//Variables
var humanInformation = {};
var errorMessage = 'WARNING!!! All the fields must have a value.';

addPersonalInformation.addEventListener('click', function(){

	var userName = document.getElementById('user-name').value;
	var userEmail = document.getElementById('user-email').value;
	var userPhone = document.getElementById('user-phone').value;
	var userAddress = document.getElementById('user-address').value;

	if(userName.length > 0 && userEmail && userPhone.length > 0 && userAddress.length > 0){

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
		
	}else{
		document.getElementById("error").innerHTML = errorMessage;
	}
	
});

addCreditCardInformation.addEventListener('click', function(){

	var cardName = document.getElementById('card-name').value;
	var cardNumber = document.getElementById('card-number').value;
	var cardDate = document.getElementById('card-date').value;
	var cardCCV = document.getElementById('card-ccv').value;

	if(cardName.length > 0 && cardNumber && cardDate.length > 0 && cardCCV.length > 0){

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
		
	}else{
		document.getElementById("error").innerHTML = errorMessage;
	}

});

returnToInit.addEventListener('click', function(){

	humanInformation = {};
	document.getElementById('checkout-information').style.display = 'none';
	document.getElementById('personal-information').style.display = 'block';

});

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