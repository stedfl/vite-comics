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
    <div class="container">
      <span>current series</span>
      <div class="cards">
        <AppCards v-for="(comic, index) in comics" :key="index" :card="comic"/>
        <button>load more</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

main {
  background-color: #1c1c1c;
}

.container {
  position: relative;
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

span {
  font-size: 1.6rem;
  position: absolute;
  bottom:95%;
  padding: 1rem 1.3rem;
}

span, 
button {
  color: white;
  background-color: $primary-color;
  text-transform: uppercase;
  font-weight: 700;
}

.cards {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 4rem 0 2rem;
}

button {
  padding: 1rem 4rem;
  border: 0;
  margin-top: 1rem;
  cursor: pointer;
}
</style>