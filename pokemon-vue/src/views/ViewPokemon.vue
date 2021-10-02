<template>
  <div class="view-pokemon">
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "ViewPokemon",
  data() {
    return {
        desserts: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ]
    };
  },
  created(){
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
      .then((resposta) => resposta.json())
      .then((json) => {
          this.desserts = json;
      })
  }
};
</script>

<style scoped>

</style>