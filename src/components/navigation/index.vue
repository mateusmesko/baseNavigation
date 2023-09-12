<template>
    <div>
        <v-btn @click="navForCreate"> criar</v-btn>
        <v-btn @click="navForList"> listar</v-btn>
        <v-btn @click="navForHome"> casa</v-btn>
        {{ $t('greeting') }}
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
    navForCreate() {xx
      this.$route.name != 'create' ? this.$router.push({ name: 'create' }) :  ''
    },
  },
};
</script>
