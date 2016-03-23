/**
 * Form directive definition
 */

angular
	.module('lab8Contacts')
	.directive('addContact', addContact);

function addContact() {

	function addContactController(){

	}//end formController

	return {
		restrict: 'E',
		templateUrl: 'app/components/add-contact/add-contact.tpl.html',
		scope: {
			errorMessage: '=',
			formType: '=',
			contactInformation: '=',
			newContct: '&',
			hideForm: '&'
		},
		bindToController: true,
		controllerAs: 'addCntct',
		controller: addContactController
	};

}//end formMain
