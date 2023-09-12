import Vue from 'vue'
import Vuex from 'vuex'
import testeModule from './request'

import actions from './actions';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    testeGetters(){
      var teste = 1
      
      return teste
    }
  },

  state,
  mutations,
  actions,
  modules: {
    teste: testeModule
  }
})


// import Vue from 'vue';
// import Vuex from 'vuex';


// import actions from './getters';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
// });