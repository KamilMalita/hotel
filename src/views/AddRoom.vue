<template>
    <div>
<!--        <v-layout xl-6 style="background-color: black">-->
<!--                    <v-flex>-->
<!--                        <ul>-->
<!--                            {{ room }}-->
<!--                        </ul>-->
<!--                    </v-flex>-->
<!--        </v-layout>-->
        <form v-on:submit="addroom(nr_pokoju,max_osob)">
            <div class="inputs">
                <v-col cols="12" sm="6" md="3">
                    <v-text-field id="room_name" v-model="nr_pokoju"
                                  label="Numer pokoju" class="red--text"
                    ></v-text-field>
                </v-col>
                <v-col cols="1" sm="6" md="3">
                    <v-text-field id="room_capability" v-model="max_osob"
                                  label="Pojemność pokoju"
                    ></v-text-field>
                </v-col>
            </div>
            <div id="addsss">
                <v-app id="inspiree">
                    <div class="text-center">
                        <v-btn type="submit">Dodaj pokój</v-btn>
                    </div>
                </v-app>
            </div>
        </form>
        <div id="rrroom">
            <v-app id="inspire">
                <div class="text-center">
                    <v-btn @click="showRooms">No Option</v-btn>
                </div>
            </v-app>
        </div>
        <div>
            <article v-for="(rooom, idx) in roooms" :key="idx">
                <!--                <img :src="location.image">-->
                <h1>{{ rooom.max_osob }}</h1>
                <h2> Goń się leszczu </h2>
            </article>
        </div>
    </div>
</template>

<script>
    import db from "../firebase/init";

    export default {
        name: 'AddRoom',
        components: {},
        data() {
            return {
                room: [],
                roooms: [],
                nr_pokoju: '',
                max_osob: '',
            }
        },
        methods: {
            addroom(nr_pokoju, max_osob) {
                db.collection('Pokoje').add({max_osob, nr_pokoju})
            },
            showRooms() {
                return {
                    roooms: db.collection('Pokoje').orderBy('max_osob'),
                }
            },
            showElement() {
                var rooms = []
                db.collection('Pokoje').get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        var data = doc.data()
                        rooms.push(data)
                    });
                })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
                this.room = rooms
            }
        },
        mounted() {
            this.showElement()
        }
    };
</script>

<style scoped>
    .inputs {
        font-family: "Roboto", sans-serif;
        font-size: xx-large;
    }
</style>