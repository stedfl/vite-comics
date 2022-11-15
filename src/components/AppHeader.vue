<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menu: [
        {
          text: "characters",
          href: "#",
          current: false,
        },
        {
          text: "comics",
          href: "#",
          current: true,
        },
        {
          text: "movies",
          href: "#",
          current: false,
        },
        {
          text: "tv",
          href: "#",
          current: false,
        },
        {
          text: "games",
          href: "#",
          current: false,
        },
        {
          text: "collectibles",
          href: "#",
          current: false,
        },
        {
          text: "videos",
          href: "#",
          current: false,
        },
        {
          text: "fans",
          href: "#",
          current: false,
        },
        {
          text: "news",
          href: "#",
          current: false,
        },
        {
          text: "shop",
          href: "#",
          current: false,
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="/img/dc-logo.png" alt="logo Dc" />
      </div>
      <nav>
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            <a :class="{'active': item.current}" :href="item.href">{{item.text}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

header {
  background-color: white;
  .container {
    @include betweenFlex;
  }

  img {
    width: 80px;
    
  }
  ul {
    display: flex;
  }

  a {
    display: inline-block;
    margin-left: 2rem;
    padding: 3rem 0;
    text-transform: uppercase;
    color: #464646;
    font-weight: 700;
    font-size: 0.8rem;
    &.active {
      border-bottom: 4px solid $primary-color;
      color: $primary-color;

    }
  }
  
}
</style>
