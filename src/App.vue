
<template>
  <div id="app">
    <p>Star wars movies</p>
    <router-link to="/" id="homebutton">Home</router-link>
    <router-view></router-view>
  </div>

</template>
<script>

export default {

}


</script>
<style>
body {
  width: 100%;
  background-color: #2c3e50;
  color: white;
  font-family: 'Avenir'
}

div {
  margin: 0 auto;
  text-align: center;

}

p {
  margin: 0;
  padding: .5em;
}

a {
  font-size: 1.5em;
  color: white;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  width: 50%;
}

ul li:nth-of-type(odd) {
  background-color: #16a085;

}

ul li:nth-of-type(even) {
  background-color: #1abc9c;

}
#homebutton{
  text-decoration: underline;
}
</style>