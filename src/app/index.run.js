export function runBlock($log, $rootScope) {
  'ngInject';

  function broadCastSlideout() {
    $rootScope.$broadcast('slideout', false);
  }

  let locationChange = $rootScope.$on('$locationChangeStart', broadCastSlideout);

  $rootScope.$on('$destroy', locationChange);

  $log.debug('runBlock end');
}
