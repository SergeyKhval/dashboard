'use strict';
const _employeesService = new WeakMap();
const _uibModalInstance = new WeakMap();
const _toaster = new WeakMap();
const _scope = new WeakMap();

export default class EmployeesModalController {
  constructor($scope, $uibModalInstance, EmployeesService, toaster) {
    _employeesService.set(this, EmployeesService);
    _uibModalInstance.set(this, $uibModalInstance);
    _toaster.set(this, toaster);
    _scope.set(this, $scope);
  }

  addNewEmployee(employee) {
    return _employeesService.get(this).addEmployee(employee)
      .then(() => {
        _scope.get(this).employee = {};
        _scope.get(this).employeeform.$setPristine();
        _scope.get(this).employeeform.$setUntouched();
        _toaster.get(this).pop('success', 'New employee saved');
      })
      .catch(e => {
        _toaster.get(this).pop('error', 'Oops', `Our API seems to be unavailable ${e}`);
      });
  }

  cancel() {
    _uibModalInstance.get(this).dismiss('cancel');
  }
}

EmployeesModalController.$inject = ['$scope', '$uibModalInstance', 'EmployeesService', 'toaster'];
