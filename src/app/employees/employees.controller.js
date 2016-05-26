'use strict';
const _uibModal = new WeakMap();
const _employeesService = new WeakMap();
const _uibModalInstance = new WeakMap();

export class EmployeesController {
  constructor($uibModal, EmployeesService) {
    _uibModal.set(this, $uibModal);
    _employeesService.set(this, EmployeesService);

    this.employees = _employeesService.get(this).employees;
  }

  openAddEmployeeModal() {
    _uibModal.get(this).open({
      templateUrl: 'myModalContent.html',
      controller: EmployeesModalController,
      controllerAs: 'emc'
    });
  }
}

class EmployeesModalController {
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

EmployeesController.$inject = ['$uibModal', 'EmployeesService'];
EmployeesModalController.$inject = ['$uibModalInstance', 'EmployeesService'];

