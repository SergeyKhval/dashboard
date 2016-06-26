'use strict';

const _http = new WeakMap();

export class GithubService {
  constructor($http) {
    _http.set(this, $http);

    this.settings = {
      rootApi: 'https://api.github.com',
      user: 'SergeyKhval',
      repo: 'dashboard',
      commitsEndpoint: 'commits'
    };
  }

  getCommits() {
    let commitsRoute = `${this.settings.rootApi}/repos/${this.settings.user}/${this.settings.repo}/${this.settings.commitsEndpoint}`;

    return _http.get(this).get(commitsRoute).then(response => {
      return response.data;
    });
  }
}

GithubService.$inject = ['$http'];
