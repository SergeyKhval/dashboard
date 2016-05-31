'use strict';
import EmployeesModalController from '../../employees/employeesModal.controller';
import IssuesModalController from '../../issues/issuesModal.controller';

const _scope = new WeakMap();
const _uibModal = new WeakMap();

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
  constructor($scope, $uibModal) {

    _scope.set(this, $scope);
    _uibModal.set(this, $uibModal);

    this.slideoutVisible = false;

    _scope.get(this).$on('slideout', (e, data) => {
      this.slideoutVisible = data;
    })
  }

  toggleSlideOutMenu() {
    this.slideoutVisible = !this.slideoutVisible;
    _scope.get(this).$emit('slideout', this.slideoutVisible);
  }

  openAddEmployeeModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/employees/employeesModal.html',
      controller: EmployeesModalController,
      controllerAs: 'emc'
    });
  }

  openAddIssueModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/issues/issuesModal.html',
      controller: IssuesModalController,
      controllerAs: 'im',
      resolve: {
        selectedIssue: () => {
          return null;
        }
      }
    });
  }
}

StatusbarController.$inject = ['$scope', '$uibModal'];
