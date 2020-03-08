import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router'
//components
import About from '@/components/About'
import Contact from '@/components/Contact'
import If from '@/components/If'
import Posts from '@/components/Posts'
import Shoshin from '@/components/posts/Shoshin'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: About },
  { path: '/contact', component: Contact},
  { path: '/if', component: If},
  { path: '/posts', component: Posts},
  { path: '/posts/shoshin', component: Shoshin}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
