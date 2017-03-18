/**
 * Created by Administrator on 2017/3/18.
 */
const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
    </div>
  `
}

const router = new VueRouter({
    routes: [
        {
            path: '/user/:userId',
            name:'user',
            component: User
        }
    ]
})


const app = new Vue({
    router
}).$mount('#app')
