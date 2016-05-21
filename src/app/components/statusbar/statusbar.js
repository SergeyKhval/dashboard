export function StatusbarDirective() {
  'ngInject';

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
    'ngInject';

    this.slideoutVisible = false;
    this.$scope = $scope;

    $scope.$on('slideout', (e, data) => {
      this.slideoutVisible = data;
    })
  }

  toggleSlideOutMenu() {
    this.slideoutVisible = !this.slideoutVisible;
    this.$scope.$emit('slideout', this.slideoutVisible);
  }

}
