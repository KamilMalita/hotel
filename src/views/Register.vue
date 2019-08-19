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
        </v-row>
      </v-container>
    </v-content>
  </v-app>
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
      visi: 'false',
      drawer: null,
    }),
  mounted(){
      this.visi=false;
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
        }
    }
  }
</script>

<style scoped>

</style>