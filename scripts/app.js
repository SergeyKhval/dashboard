/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = __webpack_require__(2);

	var _index3 = __webpack_require__(3);

	var _months = __webpack_require__(4);

	var _employees = __webpack_require__(5);

	var _employees2 = __webpack_require__(7);

	var _issues = __webpack_require__(8);

	var _issues2 = __webpack_require__(9);

	var _paymentsService = __webpack_require__(11);

	var _home = __webpack_require__(12);

	var _analytics = __webpack_require__(13);

	var _statusbar = __webpack_require__(14);

	var _slideout = __webpack_require__(15);

	var _firebase = __webpack_require__(16);

	angular.module('dashboard', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'ui.bootstrap', 'toaster', 'firebase', 'firebase.ref', 'chart.js', 'uiGmapgoogle-maps', 'google.places', 'ngCsv']).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).constant('months', _months.months).service('EmployeesService', _employees2.EmployeesService).service('IssuesService', _issues.IssuesService).service('PaymentsService', _paymentsService.PaymentsService).controller('EmployeesController', _employees.EmployeesController).controller('IssuesController', _issues2.IssuesController).controller('AnalyticsController', _analytics.AnalyticsController).controller('HomeController', _home.HomeController).directive('slideoutMenu', _slideout.SlideoutDirective).directive('statusBar', _statusbar.StatusbarDirective);

	angular.module('firebase.ref', ['firebase', 'firebase.config']).service('Ref', _firebase.FirebaseRef);

	angular.module('firebase.config', []).constant('FBURL', 'https://dashboard-7f32e.firebaseio.com/');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider) {
	  'ngInject';
	  // Enable log

	  $logProvider.debugEnabled(true);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$routeProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($routeProvider) {
	  'ngInject';

	  $routeProvider.when('/employees', {
	    templateUrl: 'app/employees/employees.html',
	    controller: 'EmployeesController',
	    controllerAs: 'employees',
	    resolve: {
	      title: function title() {
	        return 'Employees';
	      }
	    }
	  }).when('/', {
	    templateUrl: 'app/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'home',
	    resolve: {
	      title: function title() {
	        return 'Home';
	      }
	    }
	  }).when('/issues', {
	    templateUrl: 'app/issues/issues.html',
	    controller: 'IssuesController',
	    controllerAs: 'issues',
	    resolve: {
	      title: function title() {
	        return 'Issues';
	      }
	    }
	  }).when('/analytics', {
	    templateUrl: 'app/analytics/analytics.html',
	    controller: 'AnalyticsController',
	    controllerAs: 'an',
	    resolve: {
	      title: function title() {
	        return 'Analytics';
	      }
	    }
	  }).otherwise({
	    redirectTo: '/analytics'
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log", "$rootScope"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log, $rootScope) {
	  'ngInject';

	  function broadCastSlideout() {
	    $rootScope.$broadcast('slideout', false);
	  }

	  var locationChange = $rootScope.$on('$locationChangeStart', broadCastSlideout);

	  $rootScope.$on('$destroy', locationChange);

	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var months = exports.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EmployeesController = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _employeesModal = __webpack_require__(6);

	var _employeesModal2 = _interopRequireDefault(_employeesModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _uibModal = new WeakMap();
	var _employeesService = new WeakMap();

	var EmployeesController = exports.EmployeesController = function () {
	  function EmployeesController($uibModal, EmployeesService) {
	    _classCallCheck(this, EmployeesController);

	    _uibModal.set(this, $uibModal);
	    _employeesService.set(this, EmployeesService);

	    this.employees = _employeesService.get(this).employees;
	    this.selectedEmployee = false;
	  }

	  _createClass(EmployeesController, [{
	    key: 'openAddEmployeeModal',
	    value: function openAddEmployeeModal() {
	      _uibModal.get(this).open({
	        templateUrl: 'app/employees/employeesModal.html',
	        controller: _employeesModal2.default,
	        controllerAs: 'emc'
	      });
	    }
	  }, {
	    key: 'select',
	    value: function select(employee) {
	      this.selectedEmployee = employee;
	    }
	  }]);

	  return EmployeesController;
	}();

	EmployeesController.$inject = ['$uibModal', 'EmployeesService'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _employeesService = new WeakMap();
	var _uibModalInstance = new WeakMap();
	var _toaster = new WeakMap();
	var _scope = new WeakMap();

	var EmployeesModalController = function () {
	  function EmployeesModalController($scope, $uibModalInstance, EmployeesService, toaster) {
	    _classCallCheck(this, EmployeesModalController);

	    _employeesService.set(this, EmployeesService);
	    _uibModalInstance.set(this, $uibModalInstance);
	    _toaster.set(this, toaster);
	    _scope.set(this, $scope);
	  }

	  _createClass(EmployeesModalController, [{
	    key: 'addNewEmployee',
	    value: function addNewEmployee(employee) {
	      var _this = this;

	      return _employeesService.get(this).addEmployee(employee).then(function () {
	        _scope.get(_this).employee = {};
	        _scope.get(_this).employeeform.$setPristine();
	        _scope.get(_this).employeeform.$setUntouched();
	        _toaster.get(_this).pop('success', 'New employee saved');
	      }).catch(function (e) {
	        _toaster.get(_this).pop('error', 'Oops', 'Our API seems to be unavailable ' + e);
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      _uibModalInstance.get(this).dismiss('cancel');
	    }
	  }]);

	  return EmployeesModalController;
	}();

	exports.default = EmployeesModalController;


	EmployeesModalController.$inject = ['$scope', '$uibModalInstance', 'EmployeesService', 'toaster'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _employeesRef = new WeakMap();
	var _firebaseArray = new WeakMap();

	var EmployeesService = exports.EmployeesService = function () {
	  function EmployeesService(Ref, $firebaseArray) {
	    _classCallCheck(this, EmployeesService);

	    _employeesRef.set(this, Ref.child('employees'));
	    _firebaseArray.set(this, $firebaseArray);

	    this.employees = _firebaseArray.get(this)(_employeesRef.get(this));
	  }

	  _createClass(EmployeesService, [{
	    key: 'addEmployee',
	    value: function addEmployee(employee) {
	      var city = '';

	      employee.place.address_components.forEach(function (component) {
	        if (component.types[0] === 'locality') {
	          city = component.long_name;
	        }
	      });

	      var employeeObj = {
	        firstName: employee.firstName,
	        lastName: employee.lastName,
	        position: employee.position,
	        lat: employee.place.geometry.location.lat(),
	        lon: employee.place.geometry.location.lng()
	      };

	      return _firebaseArray.get(this)(_employeesRef.get(this).child(city)).$add(employeeObj);
	    }
	  }]);

	  return EmployeesService;
	}();

	EmployeesService.$inject = ['Ref', '$firebaseArray'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	//Containers for service dependencies

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _issuesRef = new WeakMap();
	var _firebaseArray = new WeakMap();

	//Service

	var IssuesService = exports.IssuesService = function () {
	  function IssuesService(Ref, $firebaseArray) {
	    _classCallCheck(this, IssuesService);

	    _issuesRef.set(this, Ref.child('issues'));
	    _firebaseArray.set(this, $firebaseArray);

	    this.issues = _firebaseArray.get(this)(_issuesRef.get(this));
	  }

	  _createClass(IssuesService, [{
	    key: 'addIssue',
	    value: function addIssue(issue) {
	      var issueObj = {
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
	  }]);

	  return IssuesService;
	}();

	//Inject service dependecies


	IssuesService.$inject = ['Ref', '$firebaseArray'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IssuesController = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _issuesModal = __webpack_require__(10);

	var _issuesModal2 = _interopRequireDefault(_issuesModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _uibModal = new WeakMap();
	var _issuesService = new WeakMap();
	var _toaster = new WeakMap();

	var IssuesController = exports.IssuesController = function () {
	  function IssuesController($uibModal, IssuesService, toaster) {
	    _classCallCheck(this, IssuesController);

	    _uibModal.set(this, $uibModal);
	    _issuesService.set(this, IssuesService);
	    _toaster.set(this, toaster);

	    this.issues = _issuesService.get(this).issues;

	    this.search = '';
	    this.filter = '';
	    this.sort = 'title';
	  }

	  _createClass(IssuesController, [{
	    key: 'openAddIssueModal',
	    value: function openAddIssueModal() {
	      _uibModal.get(this).open({
	        templateUrl: 'app/issues/issuesModal.html',
	        controller: _issuesModal2.default,
	        controllerAs: 'im',
	        resolve: {
	          selectedIssue: function selectedIssue() {
	            return null;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'openDetailIssueModal',
	    value: function openDetailIssueModal(issue) {
	      _uibModal.get(this).open({
	        templateUrl: 'app/issues/issueDetailsModal.html',
	        controller: _issuesModal2.default,
	        controllerAs: 'im',
	        resolve: {
	          selectedIssue: function selectedIssue() {
	            return issue;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'updateIssueStatus',
	    value: function updateIssueStatus(issue, status) {
	      var _this = this;

	      issue.status = status;
	      issue.updatedAt = Firebase.ServerValue.TIMESTAMP;
	      return this.issues.$save(issue).then(function () {
	        _toaster.get(_this).pop('success', 'Status updated');
	      }).catch(function (e) {
	        _toaster.get(_this).pop('error', 'Oops', 'Something went wrong ' + e);
	      });
	    }
	  }, {
	    key: 'downloadCsv',
	    value: function downloadCsv() {
	      return this.issues.map(function (issue) {
	        return {
	          title: issue.title,
	          customer: issue.customer,
	          customerEmail: issue.customerEmail,
	          description: issue.description,
	          reporter: issue.reporter,
	          status: issue.status
	        };
	      });
	    }
	  }]);

	  return IssuesController;
	}();

	IssuesController.$inject = ['$uibModal', 'IssuesService', 'toaster'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _uibModalInstance = new WeakMap();
	var _issuesService = new WeakMap();
	var _toaster = new WeakMap();

	var IssuesModalController = function () {
	  function IssuesModalController($uibModalInstance, IssuesService, toaster, selectedIssue) {
	    _classCallCheck(this, IssuesModalController);

	    _uibModalInstance.set(this, $uibModalInstance);
	    _issuesService.set(this, IssuesService);
	    _toaster.set(this, toaster);

	    this.issue = {};

	    this.selectedIssue = selectedIssue;
	  }

	  _createClass(IssuesModalController, [{
	    key: 'addNewIssue',
	    value: function addNewIssue(issue) {
	      var _this = this;

	      return _issuesService.get(this).addIssue(issue).then(function () {
	        _this.issue = {};
	        _this.issueform.$setPristine();
	        _this.issueform.$setUntouched();
	        _toaster.get(_this).pop('success', 'New issue saved');
	      }).catch(function (e) {
	        _toaster.get(_this).pop('error', 'Oops', 'Our API seems to be unavailable ' + e);
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      _uibModalInstance.get(this).dismiss('cancel');
	    }
	  }]);

	  return IssuesModalController;
	}();

	exports.default = IssuesModalController;


	IssuesModalController.$inject = ['$uibModalInstance', 'IssuesService', 'toaster', 'selectedIssue'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	//Containers for service dependencies

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _paymentsRef = new WeakMap();
	var _firebaseArray = new WeakMap();

	//Service

	var PaymentsService = exports.PaymentsService = function PaymentsService(Ref, $firebaseArray) {
	  _classCallCheck(this, PaymentsService);

	  _paymentsRef.set(this, Ref.child('payments').child('2016'));
	  _firebaseArray.set(this, $firebaseArray);

	  this.payments = _firebaseArray.get(this)(_paymentsRef.get(this));
	};

	//Inject service dependecies


	PaymentsService.$inject = ['Ref', '$firebaseArray'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeController = exports.HomeController = function HomeController() {
	  _classCallCheck(this, HomeController);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	//Containers for controller dependecies

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _issues = new WeakMap();
	var _payments = new WeakMap();
	var _months = new WeakMap();

	function countIssuesByMonth(issues) {
	  var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	  issues.forEach(function (issue) {
	    var curIssueMonthIndex = new Date(issue.createdAt).getMonth();

	    count[curIssueMonthIndex] += 1;
	  });

	  return count;
	}

	var AnalyticsController = exports.AnalyticsController = function AnalyticsController($log, months, IssuesService, PaymentsService) {
	  var _this = this;

	  _classCallCheck(this, AnalyticsController);

	  _months.set(this, months);
	  _issues.set(this, IssuesService);
	  _payments.set(this, PaymentsService);

	  this.issues = _issues.get(this).issues;
	  this.issuesByMonth = [countIssuesByMonth(this.issues)];

	  this.issues.$watch(function () {
	    _this.issuesByMonth = [countIssuesByMonth(_this.issues)];
	  });

	  this.payments = _payments.get(this).payments;
	  this.data = [this.payments.map(function (payment) {
	    return payment.$value;
	  })];

	  this.payments.$watch(function () {
	    _this.data = [_this.payments.map(function (payment) {
	      return payment.$value;
	    })];
	  });

	  this.barLabels = _months.get(this);
	};

	AnalyticsController.$inject = ['$log', 'months', 'IssuesService', 'PaymentsService'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.StatusbarDirective = StatusbarDirective;

	var _employeesModal = __webpack_require__(6);

	var _employeesModal2 = _interopRequireDefault(_employeesModal);

	var _issuesModal = __webpack_require__(10);

	var _issuesModal2 = _interopRequireDefault(_issuesModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _scope = new WeakMap();
	var _uibModal = new WeakMap();
	var _route = new WeakMap();

	function StatusbarDirective() {
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/statusbar/statusbar.html',
	    replace: true,
	    controller: StatusbarController,
	    controllerAs: 'sb',
	    bindToController: true
	  };

	  return directive;
	}

	var StatusbarController = function () {
	  function StatusbarController($scope, $uibModal, $route) {
	    var _this = this;

	    _classCallCheck(this, StatusbarController);

	    _scope.set(this, $scope);
	    _uibModal.set(this, $uibModal);
	    _route.set(this, $route);

	    this.slideoutVisible = false;

	    _scope.get(this).$on('slideout', function (e, data) {
	      _this.slideoutVisible = data;
	    });

	    _scope.get(this).$on('$routeChangeSuccess', function () {
	      _this.title = _route.get(_this).current.locals.title;
	    });
	  }

	  _createClass(StatusbarController, [{
	    key: 'toggleSlideOutMenu',
	    value: function toggleSlideOutMenu() {
	      this.slideoutVisible = !this.slideoutVisible;
	      _scope.get(this).$emit('slideout', this.slideoutVisible);
	    }
	  }, {
	    key: 'openAddEmployeeModal',
	    value: function openAddEmployeeModal() {
	      _uibModal.get(this).open({
	        templateUrl: 'app/employees/employeesModal.html',
	        controller: _employeesModal2.default,
	        controllerAs: 'emc'
	      });
	    }
	  }, {
	    key: 'openAddIssueModal',
	    value: function openAddIssueModal() {
	      _uibModal.get(this).open({
	        templateUrl: 'app/issues/issuesModal.html',
	        controller: _issuesModal2.default,
	        controllerAs: 'im',
	        resolve: {
	          selectedIssue: function selectedIssue() {
	            return null;
	          }
	        }
	      });
	    }
	  }]);

	  return StatusbarController;
	}();

	StatusbarController.$inject = ['$scope', '$uibModal', '$route'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SlideoutDirective = SlideoutDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _scope = new WeakMap();

	function SlideoutDirective() {
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/slideoutMenu/slideout.html',
	    controller: SlideoutController,
	    controllerAs: 'so'
	  };

	  return directive;
	}

	var SlideoutController = function SlideoutController($scope) {
	  var _this = this;

	  _classCallCheck(this, SlideoutController);

	  _scope.set(this, $scope);

	  this.menuItems = [{
	    title: 'Analytics',
	    icon: 'fa-bar-chart',
	    route: '#/analytics'
	  }, {
	    title: 'Employees',
	    icon: 'fa-users',
	    route: '#/employees'
	  }, {
	    title: 'Issues',
	    icon: 'fa-tasks',
	    route: '#/issues'
	  }];

	  this.slideOutVisible = false;

	  _scope.get(this).$on('slideout', function (e, data) {
	    _this.slideOutVisible = data;
	  });
	};

	SlideoutController.$inject = ['$scope'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FirebaseRef = exports.FirebaseRef = ["$window", "FBURL", function FirebaseRef($window, FBURL) {
	  'ngInject';

	  _classCallCheck(this, FirebaseRef);

	  return new $window.Firebase(FBURL);
	}];

/***/ }
/******/ ]);
angular.module('dashboard').run(['$templateCache', function($templateCache) {$templateCache.put('app/analytics/analytics.html','<div class=container-fluid><div class=row><div class=col-md-6><h3>Number of paying customers in 2016</h3><canvas id=line class="chart chart-line" chart-data=an.data chart-labels=an.barLabels></canvas></div><div class=col-md-6><h3>Issues created in 2016 by month</h3><canvas id=bar class="chart chart-bar" chart-data=an.issuesByMonth chart-labels=an.barLabels></canvas><div class=row><div class=col-md-4><p>Currently opened issues: <b>{{(an.issues | filter: \'open\').length}}</b></p></div><div class=col-md-4><p>Currently issues in progress: <b>{{(an.issues | filter: \'in progress\').length}}</b></p></div><div class=col-md-4><p>Resolved issues: <b>{{(an.issues | filter: \'resolved\').length}}</b></p></div></div></div></div></div>');
$templateCache.put('app/employees/employees.html','<toaster-container toaster-options="{\'time-out\': 2500}"></toaster-container><div class=container-fluid><div class=row><div class=col-xs-12><button class="btn btn-success btn-raised" ng-click=employees.openAddEmployeeModal()>Add new employee</button></div></div><div class=row><div class=col-md-4><uib-accordion close-others=true><uib-accordion-group ng-repeat="city in employees.employees" heading={{city.$id}} panel-class=panel-primary><table class="table table-condensed"><thead><tr><th>Name</th><th>Position</th></tr></thead><tbody><tr ng-repeat="employee in city" ng-click=employees.select(employee)><td>{{employee.firstName}} {{employee.lastName}}</td><td>{{employee.position}}</td></tr></tbody></table></uib-accordion-group></uib-accordion></div><div class=col-md-8><div class="panel panel-primary"><div class=panel-heading><h3 class=panel-title>Employee info</h3></div><div class=panel-body><p class=lead ng-hide=employees.selectedEmployee>Please, click on employee in the list to see detailed info</p><div ng-if=employees.selectedEmployee><p><em>Name</em>: {{employees.selectedEmployee.firstName}}</p><p><em>Last Name</em>: {{employees.selectedEmployee.lastName}}</p><p><em>Position</em>: {{employees.selectedEmployee.position}}</p><div><ui-gmap-google-map center="{latitude: employees.selectedEmployee.lat, longitude: employees.selectedEmployee.lon}" zoom=14><ui-gmap-marker idkey=employees.selectedEmployee.firstName coords="{latitude: employees.selectedEmployee.lat, longitude: employees.selectedEmployee.lon}"></ui-gmap-marker></ui-gmap-google-map></div></div></div></div></div></div></div>');
$templateCache.put('app/employees/employeesModal.html','<div class=modal-header><h3 class=modal-title>Add new employee</h3></div><div class=modal-body><form id=employeeform name=employeeform ng-submit=emc.addNewEmployee(employee)><div class=form-group><label for=first-name class="control-label control-label_required">First Name:</label><input type=text id=first-name class=form-control placeholder=Jane ng-model=employee.firstName autofocus required></div><div class=form-group><label for=last-name class="control-label control-label_required">Last Name:</label><input type=text id=last-name class=form-control placeholder=Doe ng-model=employee.lastName required></div><div class=form-group><label for=position class="control-label control-label_required">Position:</label><input type=text id=position class=form-control placeholder=accountant ng-model=employee.position requried></div><div class=form-group><label for=city class="control-label control-label_requried">City:</label><input g-places-autocomplete type=text id=city class=form-control placeholder="Mountain View" ng-model=employee.place required></div></form></div><div class=modal-footer><button class="btn btn-primary" type=submit form=employeeform>Add employee</button> <button class="btn btn-danger" type=button ng-click=emc.cancel()>Cancel</button></div>');
$templateCache.put('app/home/home.html','<div class=container-fluid><div class=row><div class=col-xs-12><h2>Greetings, kind reviewer</h2><p>I presume you are hell tired of checking submissions of these "bunch-of-stupid-nanodegreers". So why not to lean back and watch one nice owl</p><iframe width=420 height=315 src=https://www.youtube.com/embed/zr0f7W9QLZ4 frameborder=0 allowfullscreen></iframe><p>I hope my app won\'t make you mad)</p></div></div></div>');
$templateCache.put('app/issues/issueDetailsModal.html','<div class=panel ng-class="{\'panel-success\': im.selectedIssue.status === \'resolved\',\r\n                                      \'panel-warning\': im.selectedIssue.status === \'in progress\',\r\n                                      \'panel-primary\': im.selectedIssue.status === \'open\'}"><div class=panel-heading><h3 class=panel-title>{{im.selectedIssue.title}}</h3></div><div class=panel-body><label class=control-label>Customer:</label><p>{{im.selectedIssue.customer}} (<a ng-href=mailto:{{im.selectedIssue.customerEmail}}>{{im.selectedIssue.customerEmail}}</a>)</p><label class=control-label>Description:</label><p>{{im.selectedIssue.description}}</p><label class=control-label>Reporter:</label><p>{{im.selectedIssue.reporter}}</p><div class=row><div class=col-sm-6><label class=control-label>Created at:</label><p>{{im.selectedIssue.createdAt | date:\'longDate\'}}</p></div><div class=col-sm-6><label class=control-label>Updated at:</label><p>{{im.selectedIssue.updatedAt | date:\'longDate\'}}</p></div></div></div><div class=modal-footer><button class="btn btn-success" type=button ng-click=im.cancel()>Ok</button></div></div>');
$templateCache.put('app/issues/issues.html','<toaster-container toaster-options="{\'time-out\': 2500}"></toaster-container><div class=container-fluid><div class=row><div class=col-xs-12><button class="btn btn-success btn-raised" ng-click=issues.openAddIssueModal()>Add new issue</button> <button class="btn btn-info btn-raised" ng-csv=issues.downloadCsv() filename=issues.csv>Download csv</button></div></div><div class=row><div class=col-xs-12><div class=form-group><label for=filterissues class=control-label>Search for issue:</label><input type=text id=filterissues class=form-control ng-model=issues.search placeholder="Search titles, statuses and repoters"></div><div class=btn-group><label class="btn btn-default" ng-model=issues.filter uib-btn-radio="" uncheckable>All</label><label class="btn btn-default" ng-model=issues.filter uib-btn-radio="\'open\'" uncheckable>Open</label><label class="btn btn-default" ng-model=issues.filter uib-btn-radio="\'in progress\'" uncheckable>In progress</label><label class="btn btn-default" ng-model=issues.filter uib-btn-radio="\'resolved\'" uncheckable>Resolved</label></div><div class=table-responsive><table class="table table-condensed table-hover"><thead><tr><th ng-click="issues.sort = issues.sort === \'title\' ? \'-title\' : \'title\'">Title <i class="fa fa-sort-asc" aria-hidden=true ng-if="issues.sort === \'-title\'"></i> <i class="fa fa-sort-desc" aria-hidden=true ng-if="issues.sort === \'title\'"></i></th><th ng-click="issues.sort = issues.sort === \'reporter\' ? \'-reporter\' : \'reporter\'">Reporter <i class="fa fa-sort-asc" aria-hidden=true ng-if="issues.sort === \'-reporter\'"></i> <i class="fa fa-sort-desc" aria-hidden=true ng-if="issues.sort === \'reporter\'"></i></th><th ng-click="issues.sort = issues.sort === \'createdAt\' ? \'-createdAt\' : \'createdAt\'">Created <i class="fa fa-sort-asc" aria-hidden=true ng-if="issues.sort === \'-createdAt\'"></i> <i class="fa fa-sort-desc" aria-hidden=true ng-if="issues.sort === \'createdAt\'"></i></th><th>Status</th></tr></thead><tbody><tr ng-repeat="issue in issues.issues | filter: issues.search | filter: issues.filter | orderBy: issues.sort" ng-click=issues.openDetailIssueModal(issue)><td>{{issue.title}}</td><td>{{issue.reporter}}</td><td>{{issue.createdAt | date: \'longDate\'}}</td><td><div class=btn-group uib-dropdown ng-click=$event.stopPropagation()><button id=single-button type=button class="btn btn-raised" ng-class="{\'btn-primary\': issue.status === \'open\',\r\n                            \'btn-warning\': issue.status === \'in progress\',\r\n                             \'btn-success\': issue.status === \'resolved\'}" uib-dropdown-toggle>{{issue.status}} <span class=caret></span></button><ul class=dropdown-menu uib-dropdown-menu role=menu aria-labelledby=single-button><li role=menuitem><a ng-click="issues.updateIssueStatus(issue, \'open\')">Open</a></li><li role=menuitem><a ng-click="issues.updateIssueStatus(issue, \'in progress\')">In progress</a></li><li role=menuitem><a ng-click="issues.updateIssueStatus(issue, \'resolved\')">Resolved</a></li></ul></div></td></tr></tbody></table></div></div></div></div>');
$templateCache.put('app/issues/issuesModal.html','<div class=modal-header><h3 class=modal-title>Add new issue</h3></div><div class=modal-body><form id=issueform name=im.issueform ng-submit=im.addNewIssue(im.issue)><div class=form-group><label for=name class="control-label control-label_required">Customer name:</label><input type=text id=name class=form-control ng-model=im.issue.customer placeholder="Bob Marley" autofocus required></div><div class=form-group><label for=email class="control-label control-label_required">Customer email:</label><input type=email id=email class=form-control ng-model=im.issue.customerEmail placeholder=mail@domain.com required></div><div class=form-group><label for=title class="control-label control-label_required">Title:</label><input type=text id=title class=form-control ng-model=im.issue.title placeholder="I need wi-fi password" required></div><div class=form-group><label for=description class=control-label>Description:</label><textarea name=description id=description class=form-control ng-model=im.issue.description placeholder="A couple of words about the issue"></textarea></div><div class=form-group><label for=reporter class="control-label control-label_required">Reporter:</label><input type=text id=reporter class=form-control ng-model=im.issue.reporter placeholder="John Doe" required></div></form></div><div class=modal-footer><button class="btn btn-primary" type=submit form=issueform>Add issue</button> <button class="btn btn-danger" type=button ng-click=im.cancel()>Cancel</button></div>');
$templateCache.put('app/components/slideoutMenu/slideout.html','<div class=slideout-container ng-class="{\'slideout-container_active\': so.slideOutVisible}"><div class=slideout-menu><a ng-repeat="item in so.menuItems" ng-href={{item.route}} class="slideout-menu__item slideout-item withripple"><i class="slideout-item__icon fa {{item.icon}}" aria-hidden=true></i> <span class=slideout-item__title>{{item.title}}</span></a></div></div>');
$templateCache.put('app/components/statusbar/statusbar.html','<div class=container-fluid><div class=row><nav class="navbar navbar-static-top"><div class=container-fluid><div class=navbar-header><span class=navbar-brand>{{sb.title}}</span> <a class=btn ng-click=sb.toggleSlideOutMenu()><span class="glyphicon glyphicon-menu-hamburger"></span></a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-1><ul class="nav navbar-nav"><li><button type=button class="btn btn-default navbar-btn" tooltip-placement=bottom uib-tooltip="Add new employee" ng-click=sb.openAddEmployeeModal()><i class="fa fa-user-plus" aria-hidden=true></i></button></li><li><button type=button class="btn btn-default navbar-btn" tooltip-placement=bottom uib-tooltip="Add new issue" ng-click=sb.openAddIssueModal()><i class="fa fa-file-o" aria-hidden=true></i></button></li></ul></div></div></nav></div></div>');}]);