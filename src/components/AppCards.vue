<script>
export default {
  name: 'AppCards',
  props: {
    card: Object
  }, 
  data() {
    return {
      isPrice: false
    }
  }

}
</script>

<template>
  <div class="card">
    <img @mouseenter="isPrice=!isPrice" @mouseleave="isPrice=!isPrice"  :src="card.thumb" :alt="card.series">
    <h3>{{card.series}}</h3>
    <div  class="info">
      <h4 v-show="isPrice">{{card.price}}</h4>
      <h5 v-show="isPrice">{{card.type}}</h5>
    </div>
    
  </div>
</template>



<style lang="scss" scoped>
h3 {
  color: white;
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
}

.card {
  flex-basis: calc(100% / 6 - 1.2rem);
  margin-bottom: 2rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    object-position: top;
  }
}

.info {
  margin-top: 0.5rem;
  height: 30px;
  h4 {
    color: yellow;
  }
  h5 {
    color:white;
    text-transform: capitalize;
  }
}
</style>