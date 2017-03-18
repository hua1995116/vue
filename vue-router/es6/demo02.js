/**
 * Created by Administrator on 2017/3/18.
 */
const User = {
    template: '<div>User {{ $route.params.id }}</div>',
    '$route'(to,from){
        console.log('从'+from.params.id+'到'+to.params.id)
    }
}

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/user/:id', component: User }
    ]
})

const app = new Vue({
    router
}).$mount('#app')