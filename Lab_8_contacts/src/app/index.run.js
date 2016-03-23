(function() {
  'use strict';

  angular
    .module('lab8Contacts')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
