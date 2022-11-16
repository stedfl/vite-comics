<script>
import {footerMenu, footerSocial} from '../data/menu.js';
import {getImagePath} from '../data/dataMethods.js';
export default {
  name: 'AppFooter',
  data() {
    return {
      footerMenu,
      footerSocial,
      getImagePath
    }
  },

}
</script>

<template>
  <footer>
    <div class="footer-menu">
      <div class="container">
        <div class="left">
          <nav>
            <ul v-for="(itemMenu, index) in footerMenu" :key="index">
              <h3>{{itemMenu.title}}</h3>
              <li v-for="(item, i) in itemMenu.items" :key="i">
                <a href="#">{{item}}</a>
              </li>
            </ul>
          </nav>

        </div>
        <div class="right">
          <img src="/img/dc-logo-bg.png" alt="logo DC">
        </div>
      </div>
     
    </div>
    <div class="footer-social">
      <div class="container">
        <button>sign-up now!</button>
        <div class="social-icons">
          <a class="follow" href="#">follow us</a>
          <ul>
            <li v-for="(item, index) in footerSocial" :key="index">
              <a href="">
                <img :src="getImagePath(item.pathImage)" :alt="`${item.name} logo`">
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

footer {
  .footer-menu {
    overflow: hidden;
    height: 370px;
    background-image: url(../assets/img/footer-bg.jpg);
    .container {
      display: flex;
      height: 100%;
      .left {
        width: 55%;
        height: 100%;
        nav {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 100%;
          width: 60%;
          ul {
            margin-top: 1rem;
            h3 {
              color: white;
              text-transform: uppercase;
              font-size: 1.2rem;
              margin-bottom: 0.8rem;
            }
            li {
             margin: 0.1rem 0;
              a {
              color:$footer-color;
              text-transform: capitalize;
              font-size: 0.8rem;
              font-weight: 400;
              }
            }
          }
        }
      }
      .right {
        width: 45%;
        img {
          transform: translateY(-18%);
        } 
      }
    }
  }
  .footer-social {
    background-color: #303030;
    padding: 2.5rem 0;
    font-weight: 700;
    text-transform: uppercase;
    .container {
      @include betweenFlex;
      button  {
      background-color: transparent;
      padding: 1rem;
      border: 2px solid $primary-color;
      color: white;
      font-size: 1rem;
      text-transform: uppercase;
      }
      .social-icons {
        display: flex;
        align-items: center;
        .follow {
          color: $primary-color;
          font-size: 1.3rem;
        }
        ul {
          display: flex;
          margin-left: 0.5rem;
          li {
            margin-left: 1.2rem;
          }
        }
      }
    }
  }
}

</style>