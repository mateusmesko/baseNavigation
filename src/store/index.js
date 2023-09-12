import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    request:[
      {title:'teste',number:1},
      {title:'teste2',number:2}
    ]
  },
  getters: {
    testeGetters(){
      var teste = 1
      
      return teste
    }
  },
  mutations: {
    testeMutation(state){
      console.log('teste mutation')
    }
  },
  actions: {
    testeActions(){
      console.log('testeAction')
    }
  },
  modules: {

  }
})
