<template>
  <div class="Home">
    <v-app-bar color="green lighten-1" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div class="Title">
        <v-img class="icon-title-left" src="../assets/squirtle.png" />
        <v-img class="icon-title-left" src="../assets/pikachu.png" />
        <v-img class="icon-pokemon" src="../assets/pokemon.png"/>
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
        <v-img src="../assets/imagepokemon.jpg"/>
    </div>

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
.icon-pokemon{
    width: 150px;
}
.v-app-bar{
    display: flex;
}
</style>