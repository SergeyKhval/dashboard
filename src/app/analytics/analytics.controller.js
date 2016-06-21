'use strict';

//Containers for controller dependecies
const _issues = new WeakMap();
const _months = new WeakMap();

export class AnalyticsController {
  constructor(months, IssuesService) {
    _months.set(this, months);
    _issues.set(this, IssuesService);

    this.labels = ["January", "February", "March", "April", "May", "June", "July"];
    this.series = ['Series A', 'Series B'];
    this.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    this.barLabels = _months.get(this);

    this.barData = [_issues.get(this).issuesByMonthCount];

  }
}

AnalyticsController.$inject = ['months', 'IssuesService'];


