'use strict';

const _github = new WeakMap();
const _posts = new WeakMap();

export class HomeController {
  constructor(GithubService, PostsService) {
    _github.set(this, GithubService);
    _posts.set(this, PostsService);

    this.commits = [];
    this.posts = _posts.get(this).posts;

    _github.get(this).getCommits().then(data => {
      this.commits = data;
    })
  }
}

HomeController.$inject = ['GithubService', 'PostsService'];
