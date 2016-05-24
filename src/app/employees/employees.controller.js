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
      size: size,
      resolve: {
        items: () => {
          return this.items;
        }
      }
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
  constructor($uibModalInstance, items) {
    'ngInject';

    this.$uibModalInstance = $uibModalInstance;
    this.items = items;
    this.selected = {
      item: this.items[0]
    };
  }

  ok() {
    this.$uibModalInstance.close(this.selected.item);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}
