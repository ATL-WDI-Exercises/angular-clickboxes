'use strict'

angular
.module('clickboxesApp')
.component('boxes', {
  template:
        '<p class="control" ng-repeat="box in $ctrl.boxes">' +
          '<label class="checkbox">' +
            '<input type="checkbox" ng-model="box.value">' +
            '{{box.id}}: {{box.value}}' +
          '</label>' +
        '</p>'
        ,
  controller: function ClickboxesController () {
  this.boxes = [
    {
      id: 0,
      value: true
    }, {
      id: 1,
      value: false
    }, {
      id: 2,
      value: false
    }, {
      id: 3,
      value: true
    }
  ];
}
});
