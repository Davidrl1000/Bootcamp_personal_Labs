/**
 * Form directive definition
 */

angular
	.module('lab8Contacts')
	.directive('contactsTable', contactsTable);

function contactsTable() {

	function contactsTableController(){

	}//end contactsTableController

	return {
		restrict: 'E',
		templateUrl: 'app/components/contacts-table/contacts-table.tpl.html',
		scope: {
			contactsList: '=',
			deleteContact: '&',
			showContact: '&'
		},
		bindToController: true,
		controllerAs: 'cntctsTable',
		controller: contactsTableController
	};

}//end formMain
