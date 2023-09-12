<template>
    <div>
        <v-btn @click="navForCreate()"> criar</v-btn>
        <v-btn @click="navForList"> listar</v-btn>
        <v-btn @click="navForHome"> casa</v-btn>

       

        <div v-if="$store.getters.testeGetters == 1">valido</div>
        {{ $store.getters.testeGetters2 }}
        {{ $store.state.teste.request }}
        <p></p>
        <v-btn @click="navAction"> action</v-btn>
        <v-btn @click="navGetter"> getter</v-btn>
        <v-btn @click="navMutation"> mutation</v-btn>
        {{ $t('greeting') }}
        {{ $t('HomeArea') }}

        <v-btn @click="showModel"> new task</v-btn>
    </div>
</template>
  
<script>
import Task from '@/models/Task';

export default {
    data() {
        return {

        };
    },
    methods: {
    navForHome() {
      this.$route.name != 'home' ? this.$router.push({ name: 'home' }) :  ''
    },
    navForList() {

      this.$route.name != 'list' ? this.$router.push({ name: 'list' }) :  ''
      
    },
    navForCreate() {
      this.$store.commit('testeAction')
    },

    navAction(){
      this.$store.dispatch('testeActions2')
    },

    navMutation(){
      this.$store.commit('testeMutation2')
    },
    
    showModel(){
      let newTask = new Task(1, 'Fazer compras', 'Comprar mantimentos para o jantar', false)
      
      console.log(newTask.newTaskFunction(5))
    }
  },
};
</script>
