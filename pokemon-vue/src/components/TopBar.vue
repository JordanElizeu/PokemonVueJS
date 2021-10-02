<template>
  <div class="TopBar">
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
          <router-link to="/pokemon">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-shopping</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pokémons</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style scoped>
.TopBar a {
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
.link{
  text-decoration: blue;
}
</style>