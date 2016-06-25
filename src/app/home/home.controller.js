'use strict';

const _github = new WeakMap();

export class HomeController {
  constructor(GithubService) {
    _github.set(this, GithubService);

    this.commits = [];

    _github.get(this).getCommits().then(data => {
      this.commits = data;
    })
  }
}

HomeController.$inject = ['GithubService'];
