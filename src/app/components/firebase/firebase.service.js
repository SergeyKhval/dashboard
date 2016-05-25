'use strict';

export class FirebaseRef {
  constructor($window, FBURL) {
    'ngInject';

    return new $window.Firebase(FBURL);
  }
}
