<template>
  <div class="Home">
    <v-app-bar color="green lighten-1" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div class="Title">
        <v-img class="icon-title-left" src="../assets/squirtle.png" />
        <v-img class="icon-title-left" src="../assets/pikachu.png" />
        <v-img class="icon-pokemon" src="../assets/pokemon.png" />
        <v-img class="icon-title-right" src="../assets/charmander.png" />
        <v-img class="icon-title-right" src="../assets/bullbasaur.png" />
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--lighten-2"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/vendas">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-shopping</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pokémons planta</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/produtos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pokemons ...</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div>
      <v-img src="../assets/imagepokemon.jpg" />
      <h1 class="title-text">Pokémon</h1>
      <p class="text-pokemon">
        Pokémon (ポケモン Pokemon) é uma franquia de mídia que pertence a The
        Pokémon Company, tendo sido criada por Satoshi Tajiri em 1995. Ela é
        centrada em criaturas ficcionais chamadas "Pokémon", que os seres
        humanos capturam e os treinam para lutarem um contra o outro como um
        esporte.
      </p>
      <p class="text-pokemon">
        A franquia começou com um par de jogos lançados para o Game Boy
        original, desenvolvidos pela Game Freak e publicados pela Nintendo.
        Atualmente, a franquia se estende em jogos, cartas colecionáveis, série
        de televisão, além de filmes, mangás e brinquedos. Pokémon é a segunda
        franquia de mídia de jogos mais bem sucedida e lucrativa do mundo, atrás
        da franquia de Mario que também pertence a Nintendo.Em 2006, a franquia
        celebrou seu aniversário de 10 anos.
      </p>
      <p class="text-pokemon">
        As vendas dos jogos (incluindo home console games, como Hey You,
        Pikachu!, para Nintendo 64) acumularam mais de 200 milhões de cópias
        vendidas. Em novembro de 2005, a 4Kids Entertainment, que tinha
        conseguido o licenciamento da série animada, anunciou que havia
        concordado em não renovar o contrato da representação da franquia.
      </p>
      <p class="text-pokemon">
        A Pokémon USA Inc. (atualmente The Pokémon Company International), uma
        subsidiária da japonesa Pokémon Co., passou a supervisionar todas as
        licenças de Pokémon fora da Ásia. Até 2013, a franquia de Pokémon
        acumulou ¥4 trilhões ao redor do mundo[9] (equivalente a US$ 40,98
        bilhões)
      </p>
    </div>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="red">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style scoped>
.Home a {
  text-decoration: none;
}
.icon-title-right {
  width: 25px;
  margin-left: 10px;
}
.icon-title-left {
  width: 25px;
  margin-right: 10px;
}
.Title {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.icon-pokemon {
  width: 150px;
}
.v-app-bar {
  display: flex;
}
.text-pokemon {
  display: flex;
  text-align: center;
  margin: 25px;
}
.title-text {
  margin-top: 20px;
  margin-left: 20px;
}
.p {
  margin-top: 15px;
}
</style>