'use strict';

//Containers for controller dependecies
const _issues = new WeakMap();
const _payments = new WeakMap();
const _months = new WeakMap();

function countIssuesByMonth(issues) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  issues.forEach((issue) => {
    let curIssueMonthIndex = (new Date(issue.createdAt)).getMonth();

    count[curIssueMonthIndex] += 1;
  });

  return count;
}

export class AnalyticsController {
  constructor($log, months, IssuesService, PaymentsService) {
    _months.set(this, months);
    _issues.set(this, IssuesService);
    _payments.set(this, PaymentsService);

    this.issues = _issues.get(this).issues;
    this.issuesByMonth = [countIssuesByMonth(this.issues)];

    this.issues.$watch(() => {
      this.issuesByMonth = [countIssuesByMonth(this.issues)];
    });

    this.payments = _payments.get(this).payments;
    this.data = [this.payments.map(payment => payment.$value)];

    this.payments.$watch(() => {
      this.data = [this.payments.map(payment => payment.$value)];
    });

    this.barLabels = _months.get(this);
  }
}

AnalyticsController.$inject = ['$log', 'months', 'IssuesService', 'PaymentsService'];


