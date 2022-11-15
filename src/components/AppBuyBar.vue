<script>
export default {
  name: 'AppBuyBar',
  data() {
    return {
      menu: [
        {
          text: 'digital comics',
          pathImage: 'buy-comics-digital-comics.png'
        },
        {
          text: 'dc-merchandise',
          pathImage: 'buy-comics-merchandise.png'
        },
        {
          text: 'subscription',
          pathImage: 'buy-comics-subscriptions.png'
        },
        {
          text: 'comic shop locator',
          pathImage: 'buy-comics-shop-locator.png'
        },
        {
          text: 'dc power visa',
          pathImage: 'buy-dc-power-visa.svg'
        },
      ]
    }
  },
  methods:{
    getImagePath(imageName){
      return new URL(`../assets/img/${imageName}`, import.meta.url).href
    }
  }


}
</script>

<template>
<div class="buy-bar">
  <nav>
    <ul>
      <li v-for="(link, index) in menu" :key="index">
        <img :src="getImagePath(link.pathImage)" alt="{{link.pathImage}}">
        <a href="">{{link.text}}</a>
      </li>
    </ul>
  </nav>

</div>
  
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

.buy-bar {
  background-color: $primary-color;
  ul,
  li {
    @include centerFlex()
  }
  li {
    padding: 3rem 2.3rem;
  }
  img {
    height: 55px;
  }
  li:last-child img {
    width: 50px;
  }
  a {
    text-transform: uppercase;
    color: white;
    margin-left: 1rem;
    font-size: 0.9rem;
  }


}

</style>