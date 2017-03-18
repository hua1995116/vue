/**
 * Created by Administrator on 2017/3/18.
 */
const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const UserProfile = {
    template: '<div>UserProfile</div>'
}
const UserPosts = {
    template: '<div>UserPosts</div>'
}
const UserHome = {
    template: '<div>UserHome</div>'
}

const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                },
                {   path: '',
                    component: UserHome
                }
            ]
        }
    ]
})

const app = new Vue({
    router
}).$mount('#app')