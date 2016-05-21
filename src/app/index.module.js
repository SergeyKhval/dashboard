import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {EmployeesController} from './employees/employees.controller';
import {IssuesController} from './issues/issues.controller';
import {AnalyticsController} from './analytics/analytics.controller';
import {StatusbarDirective} from '../app/components/statusbar/statusbar.js';
import {SlideoutDirective} from '../app/components/slideoutMenu/slideout.js';

angular.module('dashboard',
  [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngRoute',
    'ui.bootstrap',
    'toastr'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('EmployeesController', EmployeesController)
  .controller('IssuesController', IssuesController)
  .controller('AnalyticsController', AnalyticsController)
  .directive('slideoutMenu', SlideoutDirective)
  .directive('statusBar', StatusbarDirective);
