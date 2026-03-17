<!DOCTYPE html>
<html lang="en">
<head>
  <title>Twitter</title>
  <meta name="description" content="twitter cards">
  <?php include "./head.php" ?>
</head>
<body>
<?php include "./nav.php" ?>
<div class="container">
  <div class="section">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title">Twitter</h1><br>
      </div>
    </div>
    <div id="app" class="row columns is-multiline">
      <div v-for="card in cardData" key="card.id" class="column is-4">
        <div class="card large">
          <div class="card-image">
            <figure class="image is-16by9">
              <img :src="card.image" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="card.avatar" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4 no-padding">{{card.user.title}}</p>
                <p>
                    <span class="title is-6">
                        <a :href=`http://twitter.com/${card.user.handle}` target="_blank" rel="noopener noreferrer nofollow"> {{card.user.handle}} </a>
                    </span>
                </p>
                <p class="subtitle is-6">{{card.user.name}}</p>
              </div>
            </div>
            <div class="content">
              {{card.content}}
              <div class="background-icon"><span class="icon-twitter"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php include "./footer.php" ?>
<!-- Using Vue to populate cards to reduce redundant code -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
let cardsData = [{
  id: 1,
  image: 'https://pbs.twimg.com/profile_banners/265003375/1390946671/1500x500',
  avatar: 'https://pbs.twimg.com/profile_images/1045997549528637440/ey4EqmSi_400x400.jpg',
  user: {
    name: 'Marco Guastalli',
    handle: 'marcoguastalli',
    title: 'a life on the net'
  },
  content: 'I don\'t know half of you half as well as I should like; and I like less than half of you half as well as you deserve.'
  },
{
  id: 2,
  image: 'https://pbs.twimg.com/profile_banners/362415233/1426960403/1500x500',
  avatar: 'https://pbs.twimg.com/profile_images/1514153779/frasifamose_logo_001_400x400.jpg',
  user: {
    name: 'Frasi Famose',
    handle: 'frasifamose',
    title: 'Frasi Famose'
  },
  content: 'Per cancellare una vita ci vuole un attimo, per cancellare un attimo ci vuole una vita.'
  }
]
 var app = new Vue({
    el: '#app',
    data: {
      cardData: cardsData
    }
  })
</script>

</body>
</html>
