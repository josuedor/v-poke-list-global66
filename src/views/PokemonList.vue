<template>
    <v-container fluid>
        <v-row justify="center" class="mt-5">
            <v-col cols="12" class="text-center max-width-800 pa-0 ma-0">
                <v-text-field
                    v-model="search"
                    solo
                    flat
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    class="font-weight-bold"
                    @input="searchPokemon"
                    :disabled="!btnActive"
                ></v-text-field>
            </v-col>
            <v-col cols="12" class="pr-3 pl-3">
                <div class="list-poke" v-if="pokemons && pokemons.length > 0">
                    <v-sheet
                        v-for="(item, index) in pokemons" :key="index"
                        :rounded="true"
                        class="mx-auto pa-3 pl-5 mb-2"
                        max-width="790"
                        @click="openDialogPokemon(item.name, item.favorite)"
                    >
                        <div class="title">
                            {{ item.name }}
                            <v-btn
                            class="float-right"
                            x-small
                            fab
                            text
                            :color="item.favorite ? '#ECA539' : 'grey'"
                            @click.stop="addToFavorites(item.id, index)"
                            >
                                <v-icon>mdi-star</v-icon>
                            </v-btn>
                        </div>

                    </v-sheet>
                </div>
                <div v-else class="text-center">
                    <div class="display-1 mb-3">
                        Uh-oh!
                    </div>
                    <div class="body-1 mb-3">
                        You look lost on your journey!
                    </div>
                    <v-btn large class="ma-2 white--text" rounded color="#F22539" to="/">
                        Go back home
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="12" class="mb-1"></v-col>
        </v-row>
        <v-footer app>
            <v-row
            class="text-center pa-3"
            >
            <v-col cols="0" md="3"></v-col>
            <v-col cols="6" md="3">
                <v-btn class="white--text" rounded :color="btnActive ? '#F22539' : '#BFBFBF' " large block @click="getAllPokemons()">
                    <v-icon left>mdi-format-list-bulleted-square</v-icon> All
                </v-btn>
            </v-col>
            <v-col cols="6" md="3">
                <v-btn class="white--text" rounded :color="!btnActive ? '#F22539' : '#BFBFBF' " large block @click="getFavorites()">
                    <v-icon left>mdi-star</v-icon> Favorites
                </v-btn>
            </v-col>
            </v-row>
        </v-footer>

        <v-snackbar
        v-model="msgCopy"
        :timeout="2000"
        >
            Pokemon is copied
        </v-snackbar>

        <v-dialog
        v-model="dialogPokemon"
        width="500"
        v-if="pokemon"
        >
        <v-card>
            <v-img
            class="pa-2"
            contain
            aspect-ratio="1.7778"
            position="center"
            v-if="pokemon.sprites.other.dream_world.front_default"
            :src="pokemon.sprites.other.dream_world.front_default"
            >
                <v-icon class="float-right" @click="dialogPokemon = false">mdi-close-circle</v-icon>
            </v-img>

            <v-card-text class="mt-2">
                <v-row>
                    <v-col cols="12" class="body-1 text-capitalize">
                        <strong>Name:</strong> {{pokemon.name}}
                        <v-divider class="mt-2"></v-divider>
                    </v-col>
                    <v-col cols="12" class="body-1">
                        <strong>Weight:</strong> {{pokemon.weight}}
                        <v-divider class="mt-2"></v-divider>
                    </v-col>
                    <v-col cols="12" class="body-1">
                        <strong>Height:</strong> {{pokemon.height}}
                        <v-divider class="mt-2"></v-divider>
                    </v-col>
                    <v-col cols="12" class="body-1">
                        <strong>Types:</strong> {{getTypes(pokemon)}}
                        <v-divider class="mt-2"></v-divider>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="ma-2 white--text" rounded color="#F22539"
                @click="copyPokemonToClipboard()"
            >
                Share to my friends
            </v-btn>
            <v-spacer></v-spacer>
           <v-btn
            fab
            text
            :color="isFav ? '#ECA539' : 'grey'"
            >
                <v-icon>mdi-star</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

    </v-container>
</template>

<script>
import axios from 'axios'
import stringSimilarity from 'string-similarity'

export default {
    data() {
        return {
            pokemonsAll: {},
            pokemons: {},
            favorites: [],
            search: '',
            btnActive: true,
            dialogPokemon: false,
            pokemon: '',
            isFav: false,
            copyPokemon: '',
            msgCopy: false
        }
    },

    mounted() {
        this.getPokemons()
    },

    methods: {
        getPokemons(){
            this.pokemons = {}
            this.pokemonsAll = {}
            axios.get(`${process.env.VUE_APP_URL}/pokemon`)
            .then(response => {
				// eslint-disable-next-line
                let data = []
                if (response.data.results) {
                    for (let index = 0; index < response.data.results.length; index++) {
                        let element = response.data.results[index]
                        element.id = index
                        element.favorite = false
                        data.push(element) 
                    }
                }
				this.pokemons = data;
                this.pokemonsAll = data;
                //console.log(data);
			}).catch((error) => {
				// eslint-disable-next-line 
				console.log('API fail: '+error);
			});
        },

        searchPokemon(){
            if (this.search) {
                let criteria = this.search.toLowerCase()
                let result = this.pokemonsAll.filter(pokemon => {
                    let pokemon_name = pokemon.name.toLowerCase()
                    if (pokemon.name && stringSimilarity.compareTwoStrings(pokemon_name, criteria) > 0.1) {
                        return pokemon
                    }
                }).sort((a,b)=>{
                    return  stringSimilarity.compareTwoStrings(b.name.toLowerCase(), criteria) - stringSimilarity.compareTwoStrings(a.name.toLowerCase(), criteria)
                });
                this.pokemons = result
            }else{
                this.pokemons = this.pokemonsAll
            }
        },

        addToFavorites(id, index){
            if (index >= 0) {
                this.pokemonsAll[id].favorite = !this.pokemonsAll[id].favorite
            }
        },

        getFavorites(){
            this.btnActive = false
            let result = this.pokemonsAll.filter(pokemon => pokemon.favorite)
            this.pokemons = result
        },

        getAllPokemons(){
            this.btnActive = true
            this.pokemons = this.pokemonsAll
        },

        openDialogPokemon(name, isFav){
            this.pokemon = ''
            this.isFav = isFav
            axios.get(`${process.env.VUE_APP_URL}/pokemon/${name}`)
            .then(response => {
                this.pokemon = response.data
				//console.log(response.data);
                this.dialogPokemon = true
			}).catch((error) => {
				// eslint-disable-next-line 
				console.log('API fail to get pokemon: '+error);
			});
        },

        getTypes(item){
            let types = Object.values(item.types).map(type => type.type.name).join(", ");
            this.copyPokemon = `${item.name}, ${item.weight}, ${item.height}, ${types}`
            return types
        },

        copyPokemonToClipboard() {
            if (this.copyPokemon) {
                var textarea = document.createElement('textarea');
                textarea.textContent = this.copyPokemon;
                document.body.appendChild(textarea);

                var selection = document.getSelection();
                var range = document.createRange();
                //  range.selectNodeContents(textarea);
                range.selectNode(textarea);
                selection.removeAllRanges();
                selection.addRange(range);

                if (document.execCommand('copy')) {
                    this.msgCopy = true
                }
                selection.removeAllRanges();

                document.body.removeChild(textarea);
            }
        },

    },
}
</script>

<style lang="css">
    .max-width-800{
        max-width: 800px  !important;
    }
</style>