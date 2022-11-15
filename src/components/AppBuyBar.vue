<script>
export default {
  name: 'AppBuyBar',
  // data() {
  //   return {
  //     buy: [
  //       {
  //         text: 'digital comics'
  //         pathImage: 'buy-comics-digital-comics.png'
  //       },
  //       {
  //         text: 'dc merchandise'
  //         pathImage: 'buy-comics-merchandise.png'
  //       },
  //       {
  //         text: 'subscription'
  //         pathImage: 'buy-comics-subscription.png'
  //       },
  //       {
  //         text: 'comic shop locator'
  //         pathImage: 'buy-comics-comic-shop-locator.png'
  //       },
  //       {
  //         text: 'dc power visa'
  //         pathImage: 'buy-comics-dc-power-visa.svg'
  //       },
  //     ]
  //   }
  // },
  // methods: {
  //   getPathImage(imageName) {
  //     return new URL (`../assets/img/${imageName}`, import.meta.url).href;
  //   }
  // }

}
</script>

<template>
<div class="buy-bar">
  <nav>
    prova!!!
    <ul>
      <li>
        <img src="../assets/img/buy-comics-digital-comics.png" alt="">
      </li>
    </ul>
  </nav>

</div>
  
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

.buy-bar {
  height: 150px;
  background-color: $primary-color;
}

</style>