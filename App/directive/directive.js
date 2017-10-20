/**
 * Created by summer on 2017/10/19.
 */
app.directive('tab',function() {
    return {
        templateUrl: "./App/views/temps/_tab.html",
        link:function(scope,ele,attr,controller) {
            $('header').on('click','a', function() {
                $(this).addClass('borbom').siblings().removeClass('borbom');
            });
            $('#btn').on('click', function() {

            })
        }
    }
});
app.directive('tab1',function() {
    return {
        templateUrl: "./App/views/temps/_tab1.html"
    }
});
