<template>
  <v-container>
    <b-button size="sm" class="mb-2">
      <b-icon
        icon="arrow-left"
        @click="redirectBack()"
        aria-hidden="true"
      ></b-icon>
    </b-button>

    <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark"><strong>Profile</strong></h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                <v-text-field outline label="Nama Lengkap" type="text">
                </v-text-field>

                <v-text-field outline label="Tampat, Tanggal Lahir" type="text">
                </v-text-field>

                <v-text-field outline label="Alamat" type="text">
                </v-text-field>

                <v-text-field outline label="Jenis Kelamin" type="text">
                </v-text-field>

                <v-text-field outline label="No HP" type="text"> </v-text-field>
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
    redirectBack() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>