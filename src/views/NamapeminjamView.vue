<template>
 <v-container>
    <b-button size="sm" class="mb-2">
      <b-icon
        icon="arrow-left"
        @click="redirectBack4()"
        aria-hidden="true"
      ></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark">Daftar Nama Peminjaman Buku</h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                
                <!--(isi) -->

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
    methods: {
        redirectBack4() {
            this.$router.push("/home");
        }
    }

}
</script>

<style>

</style>