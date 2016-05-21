import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
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
  .directive('slideoutMenu', SlideoutDirective)
  .directive('statusBar', StatusbarDirective);
