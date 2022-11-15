<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppBuyBar from './components/AppBuyBar.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppBuyBar,
    AppFooter
  }

}
</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppBuyBar/>
  <AppFooter/>
</template>



<style lang="scss">
@use './styles/general.scss' as *;

</style>