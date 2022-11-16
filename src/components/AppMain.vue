<script>
export default {
  name: 'AppMain'

}
</script>

<template>
  <main>
    <div class="jumbotron">
      <img src="../assets/img/jumbotron.jpg" alt="jumbotron">
    </div>
    
  </main>
  
</template>



<style lang="scss" scoped>
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

</style>