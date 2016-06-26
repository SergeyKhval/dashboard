'use strict';
import IssuesModalController from './issuesModal.controller';

const _uibModal = new WeakMap();
const _issuesService = new WeakMap();
const _toaster = new WeakMap();
const _rootScope = new WeakMap();

export class IssuesController {
  constructor($uibModal, $rootScope, IssuesService, toaster) {
    _uibModal.set(this, $uibModal);
    _rootScope.set(this, $rootScope);
    _issuesService.set(this, IssuesService);
    _toaster.set(this, toaster);

    this.issues = _issuesService.get(this).issues;

    this.search = '';
    this.filter = '';
    this.sort = 'title';
    this.error = 'test';

    //We have to set this function in the constructor
    //If we store it in the prototype then we lose context during fn call
    this.exportCSV = (event) => {
      let file = event.target.files[0],
        reader = new FileReader();

      this.error = '';

      reader.readAsText(file);

      reader.onload = (event) => {
        let csv = event.target.result;

        let allTextLines = csv.split(/\r\n|\n/);

        let result = [];
        let headers = [];

        allTextLines.forEach((line, index) => {
          if (index === 0) {
            headers = line.split(',');
          } else {
            let tempObj = {};
            let values = line.split(',');

            values.forEach((value, index) => {
              tempObj[headers[index]] = value;
            });

            result.push(tempObj);
          }
        });

        this.issues = result;
        _rootScope.get(this).$apply();
      };

      reader.onerror = (evt) => {
        if (evt.target.error.name == "NotReadableError") {
          this.error = "Can not read file !";
          _rootScope.get(this).$apply();
        }
      };
    };
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

  openDetailIssueModal(issue) {
    _uibModal.get(this).open({
      templateUrl: 'app/issues/issueDetailsModal.html',
      controller: IssuesModalController,
      controllerAs: 'im',
      resolve: {
        selectedIssue: function () {
          return issue;
        }
      }
    });
  }

  updateIssueStatus(issue, status) {
    issue.status = status;
    issue.updatedAt = Firebase.ServerValue.TIMESTAMP;
    return this.issues.$save(issue)
      .then(() => {
        _toaster.get(this).pop('success', 'Status updated');
      })
      .catch(e => {
        _toaster.get(this).pop('error', 'Oops', `Something went wrong ${e}`);
      })
  }

  downloadCsv() {
    return this.issues.map(issue => {
      return {
        title: issue.title,
        customer: issue.customer,
        customerEmail: issue.customerEmail,
        description: issue.description,
        reporter: issue.reporter,
        status: issue.status
      }
    });
  }


}

IssuesController.$inject = ['$uibModal', '$rootScope', 'IssuesService', 'toaster'];


