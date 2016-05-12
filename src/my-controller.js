angular.module('myControllerModule', [])
  .controller('MyController', ['$scope', 'myService', MyController]);

function MyController($scope, myService) {
  var vm = this;

  vm.hasError = false;
  vm.myProperty = 'My Controller';
  vm.myArray = [];
  vm.myObject = myService.syncCall();
  vm.myNumber = 0;
  vm.changeProperty = changeProperty;


  function controllerAsyncCall() {
    myService.asyncCall().then(
      function(data) {
        console.log(data);
        vm.myArray = data;
      },
      function() {
        vm.hasError = true;
      }
    );
  }

  function changeProperty(value) {
    vm.myProperty = value;
  }

  $scope.$emit('my-event');

  $scope.$on('some-event', function() {
    vm.myNumber++;
  });

}
