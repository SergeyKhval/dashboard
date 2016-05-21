export function SlideoutDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/slideoutMenu/slideout.html',
    controller: SlideoutController,
    controllerAs: 'so'
  };

  return directive;
}

class SlideoutController {
  constructor($scope) {
    'ngInject';

    this.menuItems = [
      {
        title: 'Home',
        icon: 'fa-home',
        route: '#/'
      },
      {
        title: 'Employees',
        icon: 'fa-users',
        route: '#/employees'
      },
      {
        title: 'Issues',
        icon: 'fa-tasks',
        route: '#/issues'
      },
      {
        title: 'Analytics',
        icon: 'fa-bar-chart',
        route: '#/analytics'
      }
    ];

    this.slideOutVisible = false;

    $scope.$on('slideout', (e, data) => {
      this.slideOutVisible = data;
    });
  }
}
