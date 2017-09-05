/**
 * Created by tc004 on 2017/9/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  showDialog: false,
}

const mutations = {
  showDialog(state){
    state.showDialog = true;
  },
  closeDialog(state){
    state.showDialog = false;
  }
}

export default new Vuex.Store({
  state,
  mutations
})

