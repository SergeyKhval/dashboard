export function routerConfig($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/employees', {
      templateUrl: 'app/employees/employees.html',
      controller: 'EmployeesController',
      controllerAs: 'employees',
      resolve: {
        title: () => 'Employees'
      }
    })
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home',
      resolve: {
        title: () => 'Home'
      }
    })
    .when('/issues', {
      templateUrl: 'app/issues/issues.html',
      controller: 'IssuesController',
      controllerAs: 'issues',
      resolve: {
        title: () => 'Issues'
      }
    })
    .when('/analytics', {
      templateUrl: 'app/analytics/analytics.html',
      controller: 'AnalyticsController',
      controllerAs: 'an',
      resolve: {
        title: () => 'Analytics'
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}
