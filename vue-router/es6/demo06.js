/**
 * Created by Administrator on 2017/3/18.
 */
const Foo = {
    template:'<div>I am Foo</div>'
}
const Bar = {
    template:'<div>I am Bar</div>'
}
const Baz = {
    template:'<div>I am Baz</div>'
}

const router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                default:Foo,
                a:Bar,
                b:Baz
            }
        }
    ]
})


const app = new Vue({
    router
}).$mount('#app')
