angular
  .module('provincesApp',[])
  .controller('MainController', MainController);

function MainController($http) {
  var vm = this;

  vm.selectedProvince= function(province){
    vm.province = province;
    vm.canton = vm.province.cantones[0];
  };

  vm.selectedCanton=function(canton){
    vm.canton = canton;
  }

  $http.get('/provinces')
        .success(function(data) {
            vm.provinces = data;
            vm.province = vm.provinces[0];
            vm.canton = vm.province.cantones[0];
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}//end MainController
