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

const Login = {
    templete:`
    <div>login</div>
  `
}

const router = new VueRouter({
    routes: [
        {
            path: '/user/:id', component: User,
        },
        {
            path: '/login',component:Login
        }
    ]
})


const app = new Vue({
    router
}).$mount('#app')

router.push({ path: 'login', query: { plan: 'private' }});