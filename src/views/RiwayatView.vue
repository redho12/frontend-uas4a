<template>
  <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon icon="arrow-left" aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 5px">
      <v-flex sm12 md20 offset-md2>
        <h2 class="text-light bg-dark text-center">Halaman Test</h2>
        <v-card>
          <v-col>
            <!-- add new riwayat -->
            <div id="overlay" v-if="showAddModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Add Riwayat</h5>
                    <button
                      type="button"
                      class="close"
                      @click="showAddModal = false"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body p-4">
                    <form action="#" method="post">
                     

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                        Isbn
                        <input
                          type="number"
                          name="isbn"
                          class="form-control form-control-lg"
                          placeholder="isbn"
                          v-model="newRiwayat.isbn"
                        />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                        Nama Lengkap
                        <input
                          type="text"
                          name="username"
                          class="form-control form-control-lg"
                          placeholder="Nama Lengkap"
                          v-model="newRiwayat.username"
                        />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                        Tanggal Pinjam
                        <input
                          type="text"
                          name="tanggl_pinjam"
                          class="form-control form-control-lg"
                          placeholder="Tanggl Pinjam"
                          v-model="newRiwayat.tanggl_pinjam"
                        />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                        Tanggal Pengembalian
                        <input
                          type="text"
                          name="tanggal_pengembalian"
                          class="form-control form-control-lg"
                          placeholder="Tanggal Pengembalian"
                          v-model="newRiwayat.tanggal_pengembalian"
                        />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                        Judul
                        <input
                          type="text"
                          name="judul"
                          class="form-control form-control-lg"
                          placeholder="Judul"
                          v-model="newRiwayat.judul"
                        />
                        </div>
                      </div>

                      <div class="form-group">
                        <button
                          class="btn btn-info btn-block btn-lg"
                          style="color: white"
                          @click="
                            showAddModal = false;
                            addriwayat();
                            clearMsg();
                          "
                        >
                          Tambahkan riwayat
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <!-- Edit peminjam -->
            <div id="overlay" v-if="showEditModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Edit peminjam</h5>
                    <button
                      type="button"
                      class="close"
                      @click="showEditModal = false"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body p-4">
                    <form action="#" method="post">
                      <div class="form-group">
                        <input
                          type="text"
                          name="id"
                          class="form-control form-control-lg"
                          v-model="currentRiwayat.id"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          name="isbn"
                          class="form-control form-control-lg"
                          v-model="currentRiwayat.isbn"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          name="tanggl_pinjam"
                          class="form-control form-control-lg"
                          v-model="currentRiwayat.tanggl_pinjam"
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          name="judul"
                          class="form-control form-control-lg"
                          v-model="currentRiwayat.judul"
                        />
                      </div>

                      <div class="form-group">
                        <button
                          class="btn btn-info btn-block btn-lg"
                          style="color: white"
                          @click="
                            showEditModal = false;
                            updateriwayat();
                            clearMsg();
                          "
                        >
                          Update peminjam
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <v-row>
              <button
                      class="btn btn-success float-left"
                      @click="showAddModal = true"
                    >
                      Add Riwayat Peminjam
                      <b-icon icon="folder-plus"></b-icon>
                    </button>
              <v-col md="12">
                
                <v-col>
                  <v-row>
                    

                    <hr class="bg-info" />
                    <div class="alert alert-danger" v-if="errorMsg">
                      {{ errorMsg }}
                    </div>
                    <div class="alert alert-success" v-if="successMsg">
                      {{ successMsg }}
                    </div>
                    <!-- display data -->
                    <div class="row">
                      <div class="col-lg-12">
                        <table class="table table-bordered table-striped">
                          <thead>
                            <tr class="text-center bg-info text-light">
                              <th>ID</th>
                              <th>ISBN</th>
                              <th>username</th>
                              <th>Tanggal Pinjam</th>
                              <th>Tanggal Pengembalian</th>
                              <th>judul</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              class="text-center"
                              v-for="riwayat in riwayat"
                              :key="riwayat"
                            >
                              <td>{{ riwayat.id }}</td>
                              <td>{{ riwayat.isbn }}</td>
                              <td>{{ riwayat.username }}</td>
                              <td>{{ riwayat.tanggl_pinjam }}</td>
                              <td>{{ riwayat.tanggal_pengembalian }}</td>
                              <td>{{ riwayat.judul }}</td>
                              <td>
                                <a
                                  href="#"
                                  class="btn"
                                  @click="
                                    showEditModal = true;
                                    selectPerpus(riwayat);
                                  "
                                  >
                                  <b-icon
                                    icon="info-circle-fill"
                                    variant="success"
                                  ></b-icon
                                  ><i class="glyphicon glyphicon-edit"></i
                                ></a>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="btn"
                                  @click="
                                    showDeleteModal = true;
                                    selectPerpus(riwayat);
                                  "
                                  >
                                  <b-icon
                                    icon="x-circle"
                                    variant="danger"
                                  ></b-icon>
                                  <i class="glyphicon glyphicon-trash"></i
                                ></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <!-- Delete peminjam -->
                    <div id="overlay" v-if="showDeleteModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Delete Peminjam</h5>
                            <button
                              type="button"
                              class="close"
                              @click="showDeleteModal = false"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body p-4">
                            <h4>Apa kamu yakin?</h4>
                            <h5>You Are Deleting {{ currentRiwayat.isbn }}</h5>
                            <hr />
                            <button
                              class="btn btn-danger btn-lg"
                              @click="
                                showDeleteModal = false;
                                hapusPerpus();
                                clearMsg();
                              "
                            >
                              Yes
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button
                              class="btn btn-success btn-lg"
                              @click="showDeleteModal = false"
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "DrinkView",

  data: () => {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      errorMsg: "",
      successMsg: "",
      riwayat: [],
      newRiwayat: {
        id: "",
        isbn: "",
        username: "",
        tanggl_pinjam: "",
        tanggal_pengembalian: "",
        judul: "",
      },
      currentRiwayat: {},
    };
  },
  mounted: function () {
    this.getAllRiwayat();
  },
  methods: {
    getAllRiwayat() {
      axios
        .get("https://bookbuku1.000webhostapp.com/baru/riwayat/all.php")
        .then((res) => {
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            // console.warn(res.data.users);
            this.riwayat = res.data.riwayat;
          }
        });
    },
    addriwayat() {
      var formData = this.toFormData(this.newRiwayat);
      axios
        .post(
          "https://bookbuku1.000webhostapp.com/baru/riwayat/tambah.php",
          formData
        )
        .then((res) => {
          this.newRiwayat = {
            id: "",
            isbn: "",
            username: "",
            tanggl_pinjam: "",
            tanggal_pengembalian: "",
            judul: "",
          };
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAllRiwayat();
          }
        });
    },
    updateriwayat() {
      var formData = this.toFormData(this.currentRiwayat);
      axios
        .post(
          "https://bookbuku1.000webhostapp.com/baru/riwayat/update.php",
          formData
        )
        .then((res) => {
          this.currentRiwayat = {};
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAllRiwayat();
          }
        });
    },
    hapusPerpus() {
      var formData = this.toFormData(this.currentRiwayat);
      axios
        .post(
          "https://bookbuku1.000webhostapp.com/baru/riwayat/hapus.php",
          formData
        )
        .then((res) => {
          this.currentRiwayat = {};
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAllRiwayat();
          }
        });
    },
    toFormData(objj) {
      var fdd = new FormData();
      for (var ii in objj) {
        fdd.append(ii, objj[ii]);
      }
      return fdd;
    },
    selectPerpus(riwayat) {
      this.currentRiwayat = riwayat;
    },
    clearMsg() {
      this.errorMsg = "";
      this.successMsg = "";
    },
    redirectBack3() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>