/**
 * Created by summer on 2017/10/19.
 */
var contro = function(dataShow,$scope) {
    dataShow.getData('get','./App/data/data.json').then(function(data) {
        $scope.infos = data.data;
    });
};
contro.value = ['dataShow','$scope'];
app.controller('myController',contro);

var contro1 = function(dataShow,$scope) {
    dataShow.getData('get','./App/data/data1.json').then(function(data) {
        $scope.infos = data.data;
    });
};
contro.value = ['dataShow','$scope'];
app.controller('myController1',contro1);