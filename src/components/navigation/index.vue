<template>
    <div>
        <v-btn :to="{ name: 'create'}"> criar</v-btn>
        <v-btn :to="{ name: 'list'}"> listar</v-btn>
        <v-btn :to="{ name: 'home'}"> casa</v-btn>
    </div>
</template>
  
<script>
export default {
data() {
    return {
        
    };
}
};
</script>
