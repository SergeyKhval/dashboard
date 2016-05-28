'use strict';
const _employeesService = new WeakMap();
const _uibModalInstance = new WeakMap();

export default class EmployeesModalController {
  constructor($uibModalInstance, EmployeesService) {
    _employeesService.set(this, EmployeesService);
    _uibModalInstance.set(this, $uibModalInstance);
  }

  addNewEmployee(employee) {
    return _employeesService.get(this).addEmployee(employee);
  }

  cancel() {
    _uibModalInstance.get(this).dismiss('cancel');
  }
}

EmployeesModalController.$inject = ['$uibModalInstance', 'EmployeesService'];
