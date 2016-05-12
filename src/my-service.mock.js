angular.module('myServiceMock', [])
  .provider('myService', function() {
    this.$get = function() {
      return {
        syncCall: function() { return {a:1}; },
        asyncCall: function() { return [1,2,3,4,5];}
      };
    };
  });
