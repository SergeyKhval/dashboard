export function routerConfig($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve: {
        title: () => 'Home'
      }
    })
    .when('/employees', {
      templateUrl: 'app/employees/employees.html',
      controller: 'EmployeesController',
      controllerAs: 'employees',
      resolve: {
        title: () => 'Employees'
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
        title: () => 'Analytics',
        'IssuesServiceData': (IssuesService) => {
          return IssuesService.promise
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}
