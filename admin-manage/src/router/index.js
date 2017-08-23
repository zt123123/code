import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Pos from '@/components/page/Pos'
import Count from '@/components/page/count'
import Shop from '@/components/page/shop'
import Goods from '@/components/common/goods'
import Member from '@/components/page/member'
import Settings from '@/components/page/settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
