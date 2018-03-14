/**
 * 设置vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({})

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition(state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection(state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition({
      commit
    }, top) {
      commit({
        type: 'updateDemoPosition',
        top: top
      })
    }
  }
})


// store.registerModule('vux', {
//   state: {
//     loading: false,
//     showBack: true,
//     title: '',
//     direction: 'forward'
//   },
//   mutations: {
//     updateLoading(state, loading) {
//       state.loading = loading
//     },
//     updateShowBack(state, showBack) {
//       state.showBack = showBack
//     },
//     updateTitle(state, title) {
//       state.title = title
//     },
//     updateDirection(state, direction) {
//       state.direction = direction
//     }
//   }
// })

export default store
