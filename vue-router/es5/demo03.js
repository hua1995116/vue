'use strict';

/**
 * Created by Administrator on 2017/3/18.
 */
var User = {
    template: '\n    <div class="user">\n      <h2>User {{ $route.params.id }}</h2>\n      <router-view></router-view>\n    </div>\n  '
};
var UserProfile = {
    template: '<div>UserProfile</div>'
};
var UserPosts = {
    template: '<div>UserPosts</div>'
};
var UserHome = {
    template: '<div>UserHome</div>'
};

var router = new VueRouter({
    routes: [{ path: '/user/:id', component: User,
        children: [{
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'profile',
            component: UserProfile
        }, {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 会被渲染在 User 的 <router-view> 中
            path: 'posts',
            component: UserPosts
        }, { path: '',
            component: UserHome
        }]
    }]
});

var app = new Vue({
    router: router
}).$mount('#app');