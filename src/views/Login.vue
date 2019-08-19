<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>


              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="email"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    type="password"
                  ></v-text-field>
                </v-form>
                <p>Link for no users without account: <router-link to="/register">Register</router-link></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import firebase from 'firebase';
export default {
    name: 'login',
    props: {
      source: String,
    },
    data: () => ({
      email: '',
      password: '',
      drawer: null,
    }),
  methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                  alert('Well done! You are connected now')
                },
                function(err) {
                  alert('Oops.' + err.message)
                }
        )
        // this.$router.replace('home');
      }
  }
  }
</script>

<style scoped>

</style>