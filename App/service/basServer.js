/**
 * Created by summer on 2017/10/19.
 */
app.factory('ajaxServer', function($http,$q) {
    return {
        ajax:function(type,url) {
            var def = $q.defer();
            $http({
                method:type,
                url:url
            }).then(function(data) {
                def.resolve(data)
            }).then(function(err) {
                def.reject(err)
            });
            return def.promise;
        }
    }
});