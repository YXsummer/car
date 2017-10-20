/**
 * Created by summer on 2017/10/19.
 */
app.factory('dataShow', ['ajaxServer', function(ajaxServer) {
    return {
        getData:function(type, url) {
            var data =  ajaxServer.ajax(type,url);
            return data;
        }
    }
}]);