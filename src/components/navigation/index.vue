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
       
    </div>
</template>
  
<script>
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
    }
    
  },
};
</script>
