import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {EmployeesController} from './employees/employees.controller';
import {EmployeesService} from './employees/employees.service';
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
    'firebase'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('Firebase', 'https://dashboard-7f32e.firebaseio.com/')
  .controller('MainController', MainController)
  .service('EmployeesService', EmployeesService)
  .controller('EmployeesController', EmployeesController)
  .controller('IssuesController', IssuesController)
  .controller('AnalyticsController', AnalyticsController)
  .directive('slideoutMenu', SlideoutDirective)
  .directive('statusBar', StatusbarDirective);
