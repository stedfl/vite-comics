<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      menu: [
        {
          title: 'dc comics',
          items: [
            'charactes',
            'comics',
            'movies',
            'tv',
            'games',
            'videos',
            'news'
          ]
        },
        {
          title: 'shop',
          items: [
            'shop DC',
            'shop DC collectibles'
          ]
        },
        {
          title: 'dc',
          items: [
            'terms of use',
            'privacy policy(new)',
            'add choices',
            'advertising',
            'jobs',
            'subscriptions',
            'talent workshops',
            'CPSC certificates',
            'ratings',
            'shop help',
            'contact us'
          ]
        },
        {
          title: 'sites',
          items: [
            'DC',
            'MAD magazine',
            'movies',
            'DC kids',
            'DC universe',
            'DC power visa',
          ]
        },

      ]
    }
  }

}
</script>

<template>
  <footer>
    <div class="footer-menu">
      <div class="container">
        <div class="left">
          <nav>
            <div class="col">
              <ul>
                <h3>{{menu[0].title}}</h3>
                <li v-for="(item, i) in menu[0].items" :key="i">
                  <a href="#">{{item}}</a>
                </li>
              </ul>
              <ul>
                <h3>{{menu[1].title}}</h3>
                <li v-for="(item, i) in menu[1].items" :key="i">
                  <a href="#">{{item}}</a>
                </li>
              </ul>
            </div>
            <ul>
              <h3>{{menu[2].title}}</h3>
              <li v-for="(item, i) in menu[2].items" :key="i">
                <a href="#">{{item}}</a>
              </li>
            </ul>
            <ul>
              <h3>{{menu[3].title}}</h3>
              <li v-for="(item, i) in menu[3].items" :key="i">
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

    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

footer {
  overflow: hidden;
  .footer-menu {
    height: 370px;
    background-image: url(../assets/img/footer-bg.jpg);
    .container {
      display: flex;
      .left {
        width: 55%;
        nav {
          display: flex;
          margin-top: 40px;
          .col ul:first-child {
            margin-bottom: 1rem;
          }
          ul {
            margin-right: 1.5rem;
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
}

</style>