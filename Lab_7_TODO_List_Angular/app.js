/**
 * TODOList Main entry point
 */

angular.module('TODOList', ['ngRoute']);

function config($routeProvider) {

	$routeProvider
		.otherwise({ redirectTo: '/' });
}

 angular
	.module('TODOList')
	.config(['$routeProvider', config])
	.controller('mainCtrl', mainCtrl);

function mainCtrl(){

	var vm = this;

  vm.list = new Array();

  storage();

  vm.addObject = function(title,description){

    if(!isEmpty(title)){

      var date = new Date();
      var next_id = parseInt(localStorage.getItem('next_id'));

      var newTask = {
        id: next_id,
        task:title,
        desc: description,
        date: date.getDay()+'/'+(date.getMonth()+1)+'/'+(date.getYear()+1900),
        done: false
      };

      vm.list.unshift(newTask);
      localStorage.setItem(next_id, JSON.stringify(newTask));
      localStorage.setItem('next_id',next_id+1);

    }//end if

  }//end addObject

  vm.deleteObject = function(object){

    for (var i = 0; i < vm.list.length; i++) {
      if(vm.list[i]===object){
        vm.list.splice(i, 1);
        i = vm.list.length + 1;
        localStorage.removeItem(object.id);
      }//end if
    }//end for
  }//end deleteObject

  vm.changeState = function(object){

    for (var i = 0; i < vm.list.length; i++) {
      if(vm.list[i]===object){
        console.log(vm.list[i]);
        vm.list[i].done=!vm.list[i].done;
        i = vm.list.length + 1;
      }//end if
    }//end for
  }//end changeState

  function storage(){

    var lgt = localStorage.getItem('next_id');

    if(lgt==="NaN"){
      localStorage.setItem('next_id',1);
    }else{

      var x = parseInt(localStorage.getItem('next_id'));

      for (var i = 0; i < x; i++) {

        var obj = JSON.parse(localStorage.getItem(i));

        if(obj != null){

           vm.list.unshift(obj);

           //REMOVE ALL OBJECTS
          // localStorage.removeItem(i);
          // localStorage.setItem('next_id',1);

        }//end if

      }//end for

    }//end if

  }//end storage

}//end mainCtrl
