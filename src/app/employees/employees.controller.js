'use strict';
import EmployeesModalController from './employeesModal.controller';

const _uibModal = new WeakMap();
const _employeesService = new WeakMap();


export class EmployeesController {
  constructor($uibModal, EmployeesService) {
    _uibModal.set(this, $uibModal);
    _employeesService.set(this, EmployeesService);

    this.employees = _employeesService.get(this).employees;
  }

  openAddEmployeeModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/employees/employeesModal.html',
      controller: EmployeesModalController,
      controllerAs: 'emc'
    });
  }
}

EmployeesController.$inject = ['$uibModal', 'EmployeesService'];


