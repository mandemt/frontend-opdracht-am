<template>
<div v-if="!film">
loading...</div>
<div v-if="film">

<h1>{{film.properties.title}}</h1>
<h2>{{film.description}}</h2>
<h3>{{film.properties.opening_crawl}}</h3>
<p>{{film.properties.producer}}</p>
<p>Episode {{film.properties.episode_id}}</p>
<p>Uitgebracht op {{film.properties.release_date}}</p>


</div>
</template>
<script>
export default{
    name: 'Details',
    data(){
  return  { 
     film: '',
    }
    },
  mounted() {
    fetch('https://www.swapi.tech/api/films/' + this.$route.params.filmId)
      .then(data => data.json())
      .then(data => this.film = data.result)
      .catch(err => console.log(err.message))
    }
}




</script>
<style scoped>
h3{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
  color: yellow;
  max-height: 10em;
  overflow: scroll;
  transform: rotate3d(1, 1, 0, 45deg);
  max-width: 30%;
}
</style>