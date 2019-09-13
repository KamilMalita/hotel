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
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer></v-spacer>


              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="login"
                    v-model="email"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="password2"
                    label="Confirm password"
                    name="password"
                    v-model="password2"
                    type="password"
                  ></v-text-field>
                  <v-content style="color: red" v-if=visi>
                    <p>Passwords are different</p>
                  </v-content>

                </v-form>
                  <p>Back to <router-link to="/login">login</router-link></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="registration" color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
<!--          <button @click="signInWithGoogle">Sign in with Google</button>-->
<!--          <p>hahaha</p>-->
<!--          <button @click="checkLogin">Sign in with Google</button>-->
        </v-row>
      </v-container>
    </v-content>
  </v-app>
<!--<a></a>-->
</template>

<script>
    import firebase from 'firebase';
export default {
    name: 'register',
    props: {
      source: String,
    },
    data: () => ({
        email: '',
        password: '',
        password2: '',
      visi: false,
      drawer: null,
      aut: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }),
  mounted(){
  },
    methods: {
        registration: function () {
          if (this.password === this.password2) {
            this.visi=false;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function (user) {
                      alert('Successfully register')
                    },
                    function (err) {
                      alert('Ooops. ' + err.message)
                    }
            );
          }
          else {this.visi=true;}
        },
        signInWithGoogle: function() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user;
          console.log((result.arg));
        }).catch(err => console.log(err.message))
      }
    },
        checkLogin: function(){
      if(firebase.auth().currentUser.isAnonymous){
        firebase.auth().signOut();
        console.log('Good');
      }
      else console.log('Bad')
        }
  }
</script>

<style scoped>

</style>