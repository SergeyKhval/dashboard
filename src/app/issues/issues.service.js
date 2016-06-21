'use strict';

//Containers for service dependencies
const _issuesRef = new WeakMap();
const _firebaseArray = new WeakMap();

//Helper functions
function countIssuesByMonth(issues) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  issues.forEach((issue) => {
    let curIssueMonthIndex = (new Date(issue.createdAt)).getMonth()

    count[curIssueMonthIndex] += 1;
  });

  return count;
}

//Service
export class IssuesService {
  constructor(Ref, $firebaseArray) {
    _issuesRef.set(this, Ref.child('issues'));
    _firebaseArray.set(this, $firebaseArray);

    this.issues = null;
    this.issuesByMonthCount = [];

    this.promise = _firebaseArray.get(this)(_issuesRef.get(this)).$loaded((data) => {
      this.issues = data;
      this.issuesByMonthCount = countIssuesByMonth(this.issues);
    });

  }

  addIssue(issue) {
    let issueObj = {
      title: issue.title,
      reporter: issue.reporter,
      description: issue.description,
      customer: issue.customer,
      customerEmail: issue.customerEmail,
      createdAt: Firebase.ServerValue.TIMESTAMP,
      updatedAt: Firebase.ServerValue.TIMESTAMP,
      status: 'open'
    };

    return _firebaseArray.get(this)(_issuesRef.get(this)).$add(issueObj);
  }
}

//Inject service dependecies
IssuesService.$inject = ['Ref', '$firebaseArray'];
