'use strict';

/**
 * Created by Administrator on 2017/3/18.
 */
var User = {
    template: '<div>User {{ $route.params.id }}</div>',
    '$route': function $route(to, from) {
        console.log('从' + from.params.id + '到' + to.params.id);
    }
};

var router = new VueRouter({
    routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }]
});

var app = new Vue({
    router: router
}).$mount('#app');