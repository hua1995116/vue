'use strict';

/**
 * Created by Administrator on 2017/3/18.
 */
var User = {
    template: '\n    <div class="user">\n      <h2>User {{ $route.params.id }}</h2>\n    </div>\n  '
};

var router = new VueRouter({
    routes: [{
        path: '/user/:userId',
        name: 'user',
        component: User
    }]
});

var app = new Vue({
    router: router
}).$mount('#app');