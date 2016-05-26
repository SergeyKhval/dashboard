'use strict';

const _issuesRef = new WeakMap();
const _firebaseArray = new WeakMap();

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
      status: 'open'
    };

    return _firebaseArray.get(this)(_issuesRef.get(this)).$add(issueObj);
  }
}

IssuesService.$inject = ['Ref', '$firebaseArray'];
