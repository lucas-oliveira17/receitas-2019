import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/auth/Login'
import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Login', component: Login }, { path: '/Home', name: 'Home', component: Home }
]

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
