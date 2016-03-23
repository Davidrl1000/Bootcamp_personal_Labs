(function() {
  'use strict';

  angular
    .module('lab8Contacts')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1454857085999;
    vm.showToastr = showToastr;
    vm.addContactError ='';
    vm.contacts = [];

    activate();
    storage();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 1000);
    }

    function showToastr() {
    }

    function getWebDevTec() {
    }

    vm.addContact = function(name,email,phone){

      var valid=validateForm(name,email,phone);

      if(valid===true){

          var next_id = parseInt(localStorage.getItem('next_id'));

          var newContact = {
            id: next_id,
            contact: name,
            contEmail: email,
            contPhone: phone
          };

          vm.contacts.unshift(newContact);
          localStorage.setItem(next_id, JSON.stringify(newContact));
          localStorage.setItem('next_id',next_id+1);

          vm.contactInformation = [];
          vm.addContactError = '';
      }else{
        vm.addContactError = valid;
      }

    }//end addObject

    vm.deleteContact = function(object){

      for (var i = 0; i < vm.contacts.length; i++) {
        if(vm.contacts[i]===object){
          vm.contacts.splice(i, 1);
          i = vm.contacts.length + 1;
          localStorage.removeItem(object.id);
        }//end if
      }//end for
    }//end deleteObject

    vm.showContact = function(object){

      vm.addContactFormhide();

      vm.contactInformation = object;

    }//end showObject

    function storage(){

      var lgt = localStorage.getItem('next_id');

      if(lgt==="NaN"){
        localStorage.setItem('next_id',1);
      }else{

        var x = parseInt(localStorage.getItem('next_id'));

        for (var i = 0; i < x; i++) {

          var obj = JSON.parse(localStorage.getItem(i));

          if(obj != null){

             vm.contacts.unshift(obj);

          }//end if

        }//end for

      }//end if

    }//end storage

    vm.editContact = function(object){

      vm.contactInformation = object;
      vm.showAddContactForm=true;
      vm.buttonAddContact=false;

    }//end editContact

     vm.addContactFormShow = function(){

       vm.contactInformation = [];
       vm.addContactError = '';
       vm.showAddContactForm=true;
       vm.buttonAddContact=true;

     }

     vm.addContactFormhide = function(){
       vm.showAddContactForm=false;
     }

    function validateForm(name,email,phone){

       if(!isEmpty(name) && !isEmpty(phone)){

         if(!isEmpty(email)){
           if(validateEmail(email)){
             return true;
           }else{
             return 'Error! Invalid email.';
           }
         }else if(isEmpty(email)){
           return true;
         }

       }else{
         return 'Error! Name and phone must have a value.';
       }

     }//end addObject
  }




  angular
    .module('lab8Contacts')
    .controller('modal',modal);
    //
    function modal($modal){
      var vmModalControler = this;
      vmModalControler.abrir = function(){
          var addModalInstance = $modal.open({
            animation: true,
            templateUrl: '/myModalContent.html',
            controllerAs: 'modalCtrl',
            controller: modalController,
            size:'md'
          });
      }
    }
    function modalController ($modalInstance){
      var vmModalInstance = this;
      vmModalInstance.close = function(){
         $modalInstance.close('closed');
      }
      vmModalInstance.save = function(){
        //  contactService.addContact(vmModalInstance.contact);
         vmModalInstance.contact = {};
          $modalInstance.close('closed');
      }
    }















})();
