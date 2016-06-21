import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {months} from './utils/months';
import {MainController} from './main/main.controller';
import {EmployeesController} from './employees/employees.controller';
import {EmployeesService} from './employees/employees.service';
import {IssuesService} from './issues/issues.service';
import {IssuesController} from './issues/issues.controller';
import {PaymentsService} from './payments/paymentsService';
import {AnalyticsController} from './analytics/analytics.controller';
import {StatusbarDirective} from '../app/components/statusbar/statusbar.js';
import {SlideoutDirective} from '../app/components/slideoutMenu/slideout.js';
import {FirebaseRef} from '../app/components/firebase/firebase.service';

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
    'toaster',
    'firebase',
    'firebase.ref',
    'chart.js',
    'uiGmapgoogle-maps',
    'google.places'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('months', months)
  .controller('MainController', MainController)
  .service('EmployeesService', EmployeesService)
  .service('IssuesService', IssuesService)
  .service('PaymentsService', PaymentsService)
  .controller('EmployeesController', EmployeesController)
  .controller('IssuesController', IssuesController)
  .controller('AnalyticsController', AnalyticsController)
  .directive('slideoutMenu', SlideoutDirective)
  .directive('statusBar', StatusbarDirective);

angular.module('firebase.ref', ['firebase', 'firebase.config'])
  .service('Ref', FirebaseRef);

angular.module('firebase.config', [])
  .constant('FBURL', 'https://dashboard-7f32e.firebaseio.com/');
