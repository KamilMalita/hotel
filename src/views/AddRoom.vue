<template>
    <v-layout xl-6 style="background-color: red">
        <v-flex>
            TO_DO
            <ul>
                {{ room }}
            </ul>
        </v-flex>
    </v-layout>
</template>

<script>
    import db from "../firebase/init";

    export default {
        name: 'AddRoom',
        components: {},
        data() {
            return {
                room: []
            }
        },
        methods: {
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
           mounted () {
      this.showElement()
    }
    };
</script>

<style>

</style>