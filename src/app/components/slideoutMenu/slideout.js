export function SlideoutDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/slideoutMenu/slideout.html',
    replace: true,
    controller: SlideoutController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class SlideoutController {
  constructor () {
    'ngInject';

  }
}
