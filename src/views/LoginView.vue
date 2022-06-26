<template>
  <v-container class="shadow p-3 mb-5 bg-body rounded">
    <v-layout wrap style="margin-top: 70px">
      <v-flex sm12 md6 offset-md3>
        
        <v-card>
          
          <v-col md="12">
            <v-row>
              <img src="../assets/images/welcome.png" class="img-fluid" alt="...">

              <v-col md="12">
                <v-btn block color="primary" @click="redirectMasuk()">
                  Masuk
                </v-btn>
              </v-col>

              
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
   data() {
     return {
       username: '',
       password: ''
     }
   },
  methods: {
    redirectMasuk() {
      this.$router.push("/home");
    },
    
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