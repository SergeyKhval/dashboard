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

    this.menuItems = [
      {
        title: 'Employees',
        icon: 'fa-users'
      },
      {
        title: 'Issues',
        icon: 'fa-tasks'
      },
      {
        title: 'Analytics',
        icon: 'fa-bar-chart'
      }
    ]

  }
}
