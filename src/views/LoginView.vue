<template>
  <v-container class="shadow p-3 mb-5 bg-body rounded">
    <v-layout wrap style="margin-top: 70px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark"><strong>Login Ke Library Start</strong></h2>
        <v-card>
          <v-col md="12">
            <v-row>
              <v-col md="12">
                <v-text-field outline label="Username" type="text">
                <input v-model="username" placeholder="Username"/>
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field outline label="Password" type="Password">
                <input v-model="password" placeholder="Password"/>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12">
            <v-row>
              <v-col md="12">
                <v-btn block="" color="primary" v-on:click="login">
                  Login</v-btn
                >
              </v-col>

              <v-col md="12">
                <v-btn block color="primary" @click="redirectDaftar()">
                  Daftar
                </v-btn>
              </v-col>

              <v-col md="12">
                <p>
                  Lupa Password ?<router-link to="lupa"
                    >Klik Disini!</router-link
                  >
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
   data() {
     return {
       username: '',
       password: ''
     }
   },
  methods: {
    redirectDaftar() {
      this.$router.push("/daftar");
    },
    async login() {
      let result = await axios.get(
        'https://bookbuku1.000webhostapp.com/baru/akun/login.php?username=${this.username}&password=${this.password}'
      )

      if(result.status==200 && result.data.length>0)
      {
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'home'})
      }
      console.warn(result)
    }
  },
};
</script>

<style>
#app{
  background-image:
    url("../assets/images/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>