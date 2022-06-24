<template>
  <v-container>
    <b-button size="sm" class="mb-2">
      <b-icon icon="arrow-left" @click="redirectBack3()" aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 20px">
      <v-flex sm12 md6 offset-md3>
        <h2 class="text-light bg-dark">Katalog Buku</h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <!-- <th scope="col">#</th> -->
                      <!-- <th scope="col"></th> -->
                      <!-- <th scope="col">Last</th>
                      <th scope="col">Handle</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">isbn</th>
                      <td v-for="perpus in perpus" :key="perpus">{{ perpus }}</td>
                    </tr>
                    <tr>
                      <th scope="col">judul</th>
                      <td v-for="judul in judul" :key="judul">{{ judul }}</td>
                      <!-- <td>Thornton</td>
                      <td>@fat</td>  -->
                    </tr>
                    <tr>
                      <th scope="col">pengarang</th>
                      <td v-for="pengarang in pengarang" :key="pengarang">{{ pengarang }}</td>
                    </tr>
                    <tr>
                      <th scope="col">penerbit</th>
                      <td v-for="penerbit in penerbit" :key="penerbit">{{ penerbit }}</td>
                    </tr>
                    <tr>
                      <th scope="col">tahun_terbit</th>
                      <td v-for="tahun_terbit in tahun_terbit" :key="tahun_terbit">{{ tahun_terbit }}</td>
                    </tr>
                    <tr>
                      <th scope="col">kategori</th>
                      <td v-for="kategori in kategori" :key="kategori">{{ kategori }}</td>
                    </tr>
                  </tbody>
                </table>
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
