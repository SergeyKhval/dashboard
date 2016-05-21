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
    ];

    this.slideOutVisible = false;

    $scope.$on('slideout', (e, data) => {
      this.slideOutVisible = data;
    })

  }
}
