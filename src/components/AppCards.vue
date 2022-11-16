<script>
export default {
  name: 'AppCards',
  props: {
    card: Object
  }

}
</script>

<template>
  <div class="card">
    <img :src="card.thumb" :alt="card.series">
    <h3>{{card.series}}</h3>
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


</style>