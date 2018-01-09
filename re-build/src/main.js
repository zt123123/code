import Vue from 'vue'
// import Vuex from 'vuex'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import List from './components/List.vue'

// let store = Vuex.Store({
//   // ...
// })

// Routes
Vonic.app.setConfig('pushMethod', 'replace')
const routes = [
  {path: '/', component: Index},
  {path: '/list', component: List},
  {path: '/about', component: About}
]

Vue.use(Vonic.app, {
  routes: routes,
  // store
})
