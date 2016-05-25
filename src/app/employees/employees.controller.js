'use strict';

export class EmployeesController {
  constructor($log, $uibModal) {
    'ngInject';

    this.$uibModal = $uibModal;
    this.$log = $log;


    this.items = ['item1', 'item2', 'item3'];
  }

  openAddEmployeeModal(size) {
    let modalInstance = this.$uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: EmployeesModalController,
      controllerAs: 'emc',
      size: size
    });

    modalInstance.result
      .then(selectedItem => {
        this.selected = selectedItem;
      })
      .catch(() => {
        this.$log.info('Modal dismissed at: ' + new Date());
      });
  }
}

class EmployeesModalController {
  constructor($log, $uibModalInstance, EmployeesService) {
    'ngInject';

    this.$uibModalInstance = $uibModalInstance;
    this.$log = $log;
    this.employeesService = EmployeesService;
  }

  addNewEmployee(employee) {
    this.employeesService.addEmployee(employee);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}
