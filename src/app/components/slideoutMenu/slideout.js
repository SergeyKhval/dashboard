'use strict';

const _scope = new WeakMap();

export function SlideoutDirective() {
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
    _scope.set(this, $scope);

    this.menuItems = [
      {
        title: 'Analytics',
        icon: 'fa-bar-chart',
        route: '#/analytics'
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
      }
    ];

    this.slideOutVisible = false;

    _scope.get(this).$on('slideout', (e, data) => {
      this.slideOutVisible = data;
    });
  }
}

SlideoutController.$inject = ['$scope'];
