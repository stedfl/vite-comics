<script>
import AppCards from './AppCards.vue';
import comics from '../data/cardComics.js'

export default {
  name: 'AppMain',
  components: {
    AppCards
  },
  data() {
    return {
      comics
    }
  }
}
</script>

<template>
  <main>
    <div class="jumbotron">
      <img src="../assets/img/jumbotron.jpg" alt="jumbotron">
    </div>
    <div class="cards container">
      <AppCards v-for="(comic, index) in comics" :key="index" :card="comic"/>
    </div>

  </main>
  
</template>



<style lang="scss" scoped>
@use "../styles/partials/mixin" as *;
main {
  background-color: #1c1c1c;
}
.jumbotron {
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position:top;
  }
}

.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3rem 0;
}

</style>