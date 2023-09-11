<template>
    <div>
        <v-btn @click="navForCreate"> criar</v-btn>
        <v-btn @click="navForList"> listar</v-btn>
        <v-btn @click="navForHome"> casa</v-btn>
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
      this.$router.push({ name: 'home' }); // Use o nome da rota para navegar
    },
    navForList() {
      this.$router.push({ name: 'list' }); // Use o nome da rota para navegar
    },
    navForCreate() {
      this.$router.push({ name: 'create' }); // Use o nome da rota para navegar
    },
  },
};
</script>
