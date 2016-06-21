'use strict';

//Containers for controller dependecies
const _issues = new WeakMap();
const _months = new WeakMap();

function countIssuesByMonth(issues) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  issues.forEach((issue) => {
    let curIssueMonthIndex = (new Date(issue.createdAt)).getMonth()

    count[curIssueMonthIndex] += 1;
  });

  return count;
}

export class AnalyticsController {
  constructor(months, IssuesService) {
    _months.set(this, months);
    _issues.set(this, IssuesService);

    this.issues = _issues.get(this).issues;
    this.issuesByMonth = [countIssuesByMonth(this.issues)];

    this.issues.$watch(() => {
      this.issuesByMonth = [countIssuesByMonth(this.issues)];
    });

    this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    this.series = ['Series A', 'Series B'];
    this.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    this.barLabels = _months.get(this);
  }
}

AnalyticsController.$inject = ['months', 'IssuesService'];


