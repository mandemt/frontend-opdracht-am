<template>
<h1>Films</h1>
<div v-if="!films">
loading...</div>
<div v-if="films">
<ul>
  <li v-for="film in films">
 <router-link :to="'films/' + film.uid">{{film.properties.title}}</router-link>
  </li>
  </ul>
  </div>
</template>
<script>
export default{
    name: 'FilmList',
  data() {
    return {
      films: ''
  }},
  mounted() {
    fetch('https://www.swapi.tech/api/films/')
      .then(data => data.json())
      .then(data => this.films = data.result)
      .catch(err => console.log(err.message))
  }
}

</script>
<style scoped>

ul{
  text-align: center;
}
li:hover{
  background-color: darkslategray;
}

</style>                