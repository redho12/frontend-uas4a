<template>
  <div class="home">
    <Navbar />
    <div class="container shadow p-3 mb-5 bg-body rounded">
      <div class="text-light">
        <h2><strong>Daftar Pilihan</strong></h2>
      </div>
      <div class="row mb-3 text-light">
        <div class="col-md-4 mt-4 shadow p-3 mb-5 bg-body rounded">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/images/image-perpustakaan.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <b-button size="sm " @click="redirectKatalog()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon> Katalog
              </b-button>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 shadow p-3 mb-5 bg-body rounded">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/images/image-perpustakaan.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <b-button size="sm" @click="redirectPeminjaman()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                Peminjaman Buku
              </b-button>
            </div>
          </div>
        </div>
         <div class="col-md-4 mt-4 shadow p-3 mb-5 bg-body rounded">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/images/image-perpustakaan.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <b-button size="sm" @click="redirectNamapeminjam()" class="mb-2">
                <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                Daftar Nama Peminjam Buku
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow p-3 mb-5 bg-body rounded">
        <b-button v-b-toggle.sidebar-border>Tentang Libraty Start</b-button>
        <b-sidebar
          id="sidebar-border"
          sidebar-class="border-right border-danger"
        >
          <div class="px-3 py-2">
            <p>
              Library Start Merupakan web dimana
              admin dapat melakukan peng-inputan
              data nama para meminjam buku perpustakaan
              secara real time dimana saja
            </p>
            <img src="../assets/images/suka-suka.jpg" class="img-fluid" alt="...">
          </div>
        </b-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  methods: {
    redirectKatalog() {
      this.$router.push("/katalog");
    },
    redirectPeminjaman() {
      this.$router.push("/peminjaman");
    },
    redirectNamapeminjam() {
      this.$router.push("/namapeminjam");
    },
  },
};
</script>

<style>
#app {
  font-family: "Comic Neue", cursive;
}
.router-link-exact-active {
  font-weight: bold;
}
</style>