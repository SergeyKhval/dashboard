import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {months} from './utils/months';
import {EmployeesController} from './employees/employees.controller';
import {EmployeesService} from './employees/employees.service';
import {IssuesService} from './issues/issues.service';
import {PostsService} from './components/posts/posts.service';
import {GithubService} from './components/github/github.service';
import {IssuesController} from './issues/issues.controller';
import {PaymentsService} from './payments/paymentsService';
import {HomeController} from './home/home.controller';
import {AnalyticsController} from './analytics/analytics.controller';
import {StatusbarDirective} from '../app/components/statusbar/statusbar.js';
import {SlideoutDirective} from '../app/components/slideoutMenu/slideout.js';
import {FirebaseRef} from '../app/components/firebase/firebase.service';
import {CsvExport} from './components/csvexport/csvexport.directive';

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
    'google.places',
    'ngCsv'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('months', months)
  .service('EmployeesService', EmployeesService)
  .service('IssuesService', IssuesService)
  .service('PaymentsService', PaymentsService)
  .service('GithubService', GithubService)
  .service('PostsService', PostsService)
  .controller('EmployeesController', EmployeesController)
  .controller('IssuesController', IssuesController)
  .controller('AnalyticsController', AnalyticsController)
  .controller('HomeController', HomeController)
  .directive('slideoutMenu', SlideoutDirective)
  .directive('statusBar', StatusbarDirective)
  .directive('csvExport', CsvExport);

angular.module('firebase.ref', ['firebase', 'firebase.config'])
  .service('Ref', FirebaseRef);

angular.module('firebase.config', [])
  .constant('FBURL', 'https://dashboard-7f32e.firebaseio.com/');
