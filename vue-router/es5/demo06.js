'use strict';

/**
 * Created by Administrator on 2017/3/18.
 */
var Foo = {
    template: '<div>I am Foo</div>'
};
var Bar = {
    template: '<div>I am Bar</div>'
};
var Baz = {
    template: '<div>I am Baz</div>'
};

var router = new VueRouter({
    routes: [{
        path: '/',
        components: {
            default: Foo,
            a: Bar,
            b: Baz
        }
    }]
});

var app = new Vue({
    router: router
}).$mount('#app');