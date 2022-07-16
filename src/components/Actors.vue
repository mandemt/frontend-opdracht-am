
<template>
    <h1>Actors</h1>
    Kies film: <select v-on:change="sort">
        <option v-if="!films" value="">Loading...</option>
        <option value="">Alle</option>
        <option v-for="film in films" :value="film.uid">{{ film.properties.title }}</option>
    </select>
    <div v-if="!actors">
      <h3>loading...</h3>
    </div>
    <ul>
        <li v-for="actor in newActors">
            <p>{{ actor.name }}</p>
        </li>
    </ul>
</template>
<script>

export default {
    name: 'Actors',
    data() {


        return {
            actors: '',
            films: '',
            characters: [],
            newActors: []
        }
    },

    mounted() {
        fetch('https://www.swapi.tech/api/people?page=1&limit=100')
            .then(data => data.json())
            .then(data => this.newActors = data.results)
            .then(data => this.actors = data)
            .catch(err => console.log(err.message))
        fetch('https://www.swapi.tech/api/films')
            .then(data => data.json())
            .then(data => this.films = data.result)
            .catch(err => console.log(err.message))
    },
    methods: {
        filter: function () {
            this.toggle = !this.toggle
            if (this.toggle === false) {
                this.actors.sort(function (a, b) {

                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }

                    return 0;
                })
            }
            if (this.toggle === true) {
                this.actors.sort(function (a, b) {

                    return a.uid - b.uid;
                })
            }
        },
        sort: function (e) {

            if (e.target.value === "") {
                this.newActors = this.actors
            }
            else {
                fetch('https://www.swapi.tech/api/films/' + e.target.value)
                    .then(data => data.json())
                    .then(data => this.assign(data.result.properties.characters))
                    .catch(err => console.log(err.message))
            }
        },

        assign: function (data) {
            this.characters = []
            data.forEach(character => {
                character = character.split('/')[5]
                this.characters.push(character)
            })
            this.newActors = this.actors.filter(actor => this.characters.includes(actor.uid))
        }

    }
}



</script>
<style scoped>
</style>                        
