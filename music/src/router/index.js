import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music'
import Video from '@/components/Video'
import Radio from '@/components/Radio'
import Lyric from '@/components/Lyric'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/music'
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      name: 'lyric',
      path: '/lyric',
      component: Lyric
    }
  ]
})
