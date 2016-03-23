/**
 * Form directive definition
 */

angular
	.module('lab8Contacts')
	.directive('showContact', showContact);

function showContact() {

	function showContactController(){

	}//end formController

	return {
		restrict: 'E',
		templateUrl: 'app/components/show-contact/show-contact.tpl.html',
		scope: {
			contactInformation: '=',
			editContact: '&'
		},
		bindToController: true,
		controllerAs: 'showCntct',
		controller: showContactController
	};

}//end formMain
