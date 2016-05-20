export function StatusbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/statusbar/statusbar.html',
    replace: true,
    controller: StatusbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class StatusbarController {
  constructor () {
    'ngInject';

  }
}
