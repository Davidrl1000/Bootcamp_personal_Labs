/**
 * Form directive definition
 */

angular
	.module('TODOList')
	.directive('todoMain', todoMain);

function todoMain() {

	function todoController(){

	}//end formController

	return {
		restrict: 'E',
		templateUrl: 'common/directives/todo-main/todo-main.tpl.html',
		scope: {
			todoList: '=',
			deleteObject: '&',
			changeState: '&'
		},
		bindToController: true,
		controllerAs: 'ctrlList',
		controller: todoController
	};

}//end formMain
