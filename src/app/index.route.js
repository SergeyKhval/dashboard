export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/employess', {
      templateUrl: 'app/employees/employees.html',
      controller: 'EmployeesController',
      controllerAs: 'employees'
    })
    .when('/issues', {
      templateUrl: 'app/issues/issues.html',
      controller: 'IssuesController',
      controllerAs: 'issues'
    })
    .when('/analytics', {
      templateUrl: 'app/analytics/analytics.html',
      controller: 'AnalyticsController',
      controllerAs: 'analytics'
    })
    .otherwise({
      redirectTo: '/'
    });
}
