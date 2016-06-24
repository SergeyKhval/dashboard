'use strict';
import EmployeesModalController from './employeesModal.controller';

const _uibModal = new WeakMap();
const _employeesService = new WeakMap();
const _scope = new WeakMap();

export class EmployeesController {
  constructor($scope, $uibModal, EmployeesService) {
    _uibModal.set(this, $uibModal);
    _employeesService.set(this, EmployeesService);
    _scope.set(this, $scope);

    var settings = {
      defaultPosition: {
        latitude: 0,
        longitude: 0
      },
      defaultZoom: 2,
      closeUpZoom: 13
    };

    this.cities = _employeesService.get(this).cities;
    this.employees = _employeesService.get(this).employees;
    this.selectedEmployee = false;
    this.mapZoom = settings.defaultZoom;
    this.mapCenter = settings.defaultPosition;

    _scope.get(this).$watch(() => this.selectedEmployee, (newVal) => {
      this.mapZoom = newVal ? settings.closeUpZoom : settings.defaultZoom;
      this.mapCenter = newVal ? {latitude: newVal.lat, longitude: newVal.lon} : settings.defaultPosition;
    })
  }

  openAddEmployeeModal() {
    _uibModal.get(this).open({
      templateUrl: 'app/employees/employeesModal.html',
      controller: EmployeesModalController,
      controllerAs: 'emc'
    });
  }

  select(employee) {
    this.selectedEmployee = employee;
  }
}

//Inject dependencies
EmployeesController.$inject = ['$scope', '$uibModal', 'EmployeesService'];
