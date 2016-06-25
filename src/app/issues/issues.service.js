'use strict';

//Containers for service dependencies
const _issuesRef = new WeakMap();
const _firebaseArray = new WeakMap();

//Service
export class IssuesService {
  constructor(Ref, $firebaseArray) {
    _issuesRef.set(this, Ref.child('issues'));
    _firebaseArray.set(this, $firebaseArray);

    this.issues = _firebaseArray.get(this)(_issuesRef.get(this));
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

    return this.issues.$add(issueObj);
  }
}

//Inject service dependecies
IssuesService.$inject = ['Ref', '$firebaseArray'];
