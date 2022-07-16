<template>
<h1>Home</h1>
<div>
<router-link to="/films">Films</router-link>
<router-link to="/actors">Characters</router-link>
</div>
</template>
<script>
export default{
 name: 'Home',
 
}
</script>
<style scoped>
div{
    width: 100%;
    display: flex;
    justify-content: center;
}
a{
    margin: 0 1em;
    background-color: #c0392b;
    padding: 1em;
    border: 4px solid #e67e22;
    border-radius: 10px;

}
</style>