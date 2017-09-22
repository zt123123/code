/**
 * Created by tc004 on 2017/9/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  count: false,
  showlyric: false
}

const mutations = {
  isshow(state){
    state.count = !state.count;
  },
  isshowlyric(state){
    state.showlyric = !state.showlyric;
  }
}

export default new Vuex.Store({
  state,
  mutations
})

