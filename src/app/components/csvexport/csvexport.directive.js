'use strict';

export function CsvExport(){
  let directive =  {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.csvExport);
      element.bind('change', onChangeHandler);
    }
  };

  return directive;
}
