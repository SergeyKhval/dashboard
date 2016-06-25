'use strict';
import EmployeesModalController from '../../employees/employeesModal.controller';
import IssuesModalController from '../../issues/issuesModal.controller';
import PostsModalController from '../../components/posts/postModal.controller';

const _scope = new WeakMap();
const _uibModal = new WeakMap();
const _route = new WeakMap();

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
  constructor($scope, $uibModal, $route) {

    _scope.set(this, $scope);
    _uibModal.set(this, $uibModal);
    _route.set(this, $route);

    this.slideoutVisible = false;

    _scope.get(this).$on('slideout', (e, data) => {
      this.slideoutVisible = data;
    });

    _scope.get(this).$on('$routeChangeSuccess', () => {
      this.title = _route.get(this).current.locals.title;
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

  openAddPostModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/components/posts/postModal.html',
      controller: PostsModalController,
      controllerAs: 'pm'
    });
  }
}

StatusbarController.$inject = ['$scope', '$uibModal', '$route'];
