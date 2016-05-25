'use strict';
const _scope = new WeakMap();

export function StatusbarDirective() {
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/statusbar/statusbar.html',
    replace: true,
    controller: StatusbarController,
    controllerAs: 'sb',
    bindToController: true
  };

  return directive;
}

class StatusbarController {
  constructor($scope) {

    _scope.set(this, $scope);

    this.slideoutVisible = false;

    _scope.get(this).$on('slideout', (e, data) => {
      this.slideoutVisible = data;
    })
  }

  toggleSlideOutMenu() {
    this.slideoutVisible = !this.slideoutVisible;
    _scope.get(this).$emit('slideout', this.slideoutVisible);
  }
}

StatusbarController.$inject = ['$scope'];
