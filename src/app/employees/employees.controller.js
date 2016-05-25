'use strict';
const _uibModal = new WeakMap();
const _log = new WeakMap();
const _employeesService = new WeakMap();
const _uibModalInstance = new WeakMap();

export class EmployeesController {
  constructor($log, $uibModal) {
    _uibModal.set(this, $uibModal);
    _log.set(this, $log);
  }

  openAddEmployeeModal(size) {
    _uibModal.get(this).open({
      templateUrl: 'myModalContent.html',
      controller: EmployeesModalController,
      controllerAs: 'emc',
      size: size
    });
  }
}

class EmployeesModalController {
  constructor($log, $uibModalInstance, EmployeesService) {
    _employeesService.set(this, EmployeesService);
    _log.set(this, $log);
    _uibModalInstance.set(this, $uibModalInstance);
  }

  addNewEmployee(employee) {
    return _employeesService.get(this).addEmployee(employee);
  }

  cancel() {
    _uibModalInstance.get(this).dismiss('cancel');
  }
}

EmployeesController.$inject = ['$log', '$uibModal'];
EmployeesModalController.$inject = ['$log', '$uibModalInstance', 'EmployeesService'];

