'use strict';

const _github = new WeakMap();
const _posts = new WeakMap();
const _interval = new WeakMap();
const _scope = new WeakMap();

export class HomeController {
  constructor($scope, $interval, GithubService, PostsService) {
    _scope.set(this, $scope);
    _interval.set(this, $interval);
    _github.set(this, GithubService);
    _posts.set(this, PostsService);

    let githubPolling;

    this.commits = [];
    this.posts = _posts.get(this).posts;

    _github.get(this).getCommits().then(data => {
      this.commits = data;
    });

    githubPolling = _interval.get(this)(() => {
      _github.get(this).getCommits().then(data => {
        this.commits = data;
      })
    }, 1000 * 60);

    _scope.get(this).$on('$destroy', () => {
      _interval.get(this).cancel(githubPolling);
    })
  }
}

HomeController.$inject = ['$scope', '$interval', 'GithubService', 'PostsService'];
