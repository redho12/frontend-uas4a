<template>
  <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon icon="arrow-left" 
       aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark">Peminjaman Buku</h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    redirectBack3() {
      this.$router.push('/home');
    },
  },
  data() {
    return {
      perpus: [],
      judul: [],
      pengarang: [],
      penerbit: [],
      tahun_terbit: [],
      kategori: [],
    };
  },
  async mounted() {
    const response = await axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php');
    this.perpus = response.data.map(({ isbn }) => isbn);

    const judul = await axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php');
    this.judul = judul.data.map(({ judul }) => judul);

    const pengarang = await axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php');
    this.pengarang = pengarang.data.map(({ pengarang }) => pengarang);

    const penerbit = await axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php');
    this.penerbit = penerbit.data.map(({ penerbit }) => penerbit);

    const tahun_terbit = await axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php');
    this.tahun_terbit = tahun_terbit.data.map(({ tahun_terbit }) => tahun_terbit);

    const kategori = await axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php');
    this.kategori = kategori.data.map(({ kategori }) => kategori);
  },
};
</script>

<style></style>
