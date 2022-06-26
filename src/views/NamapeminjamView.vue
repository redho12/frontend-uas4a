<template>
  <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon icon="arrow-left" aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 5px">
      <v-flex sm12 md20 offset-md2>
        <h2 class="text-light bg-dark text-center">
          Halaman Daftar Nama Peminjam
        </h2>
        <v-card>
          <v-col>
            <!-- add new nama -->
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
                          Nama Lengkap
                          <input
                            type="text"
                            name="username"
                            class="form-control form-control-lg"
                            placeholder="username"
                            v-model="newAkun.username"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                          ID perpustakaan
                          <input
                            type="number"
                            name="password"
                            class="form-control form-control-lg"
                            placeholder="id perpustakaan"
                            v-model="newAkun.password"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                          TT Lahir
                          <input
                            type="text"
                            name="ttl"
                            class="form-control form-control-lg"
                            placeholder="TT Lahir"
                            v-model="newAkun.ttl"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                          Alamat
                          <input
                            type="text"
                            name="alamat"
                            class="form-control form-control-lg"
                            placeholder="alamat"
                            v-model="newAkun.alamat"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                          Jenis Kelamin
                          <input
                            type="text"
                            name="jenis_kelamin"
                            class="form-control form-control-lg"
                            placeholder="Jenis_kelamin"
                            v-model="newAkun.jenis_kelamin"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="text-nowrap bg-light border">
                          No Hp
                          <input
                            type="text"
                            name="no_hp"
                            class="form-control form-control-lg"
                            placeholder="No Hp"
                            v-model="newAkun.no_hp"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          class="btn btn-info btn-block btn-lg"
                          style="color: white"
                          @click="
                            showAddModal = false;
                            addAkun();
                            clearMsg();
                          "
                        >
                          Tambahkan Akun
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
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
                    <h5>You Are Deleting {{ currentAkun.username }}</h5>
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
                      <div class="text-nowrap bg-light border">
                        Nama
                        <div class="form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="Alamat"
                            class="form-control form-control-lg"
                            v-model="currentAkun.username"
                          />
                        </div>
                      </div>

                      <div class="text-nowrap bg-light border">
                        TT Lahir
                        <div class="form-group">
                          <input
                            type="text"
                            name="ttl"
                            placeholder="Alamat"
                            class="form-control form-control-lg"
                            v-model="currentAkun.ttl"
                          />
                        </div>
                      </div>

                      <div class="text-nowrap bg-light border">
                        Alamat
                        <div class="form-group">
                          <input
                            type="text"
                            name="alamat"
                            placeholder="Alamat"
                            class="form-control form-control-lg"
                            v-model="currentAkun.alamat"
                          />
                        </div>
                      </div>

                      <div class="text-nowrap bg-light border">
                        No Hp
                        <div class="form-group">
                          <input
                            type="text"
                            name="no_hp"
                            placeholder="No Hp"
                            class="form-control form-control-lg"
                            v-model="currentAkun.no_hp"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <button
                          class="btn btn-info btn-block btn-lg"
                          style="color: white"
                          @click="
                            showEditModal = false;
                            updateAkun();
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
                      Add peminjam
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
                              <th>nama lengkap</th>
                              <th>id</th>
                              <th>TTL</th>
                              <th>alamat</th>
                              <th>jenis kelamin</th>
                              <th>no_hp</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              class="text-center"
                              v-for="akun in akun"
                              :key="akun"
                            >
                              <td>{{ akun.username }}</td>
                              <td>{{ akun.password }}</td>
                              <td>{{ akun.ttl }}</td>
                              <td>{{ akun.alamat }}</td>
                              <td>{{ akun.jenis_kelamin }}</td>
                              <td>{{ akun.no_hp }}</td>
                              <td>
                                <a
                                  href="#"
                                  class="btn"
                                  @click="
                                    showEditModal = true;
                                    selectPerpus(akun);
                                  "
                                  ><b-icon
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
                                    selectPerpus(akun);
                                  "
                                  ><b-icon
                                    icon="x-circle"
                                    variant="danger"
                                  ></b-icon
                                  ><i class="glyphicon glyphicon-trash"></i
                                ></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
      akun: [],
      newAkun: {
        username: "",
        password: "",
        ttl: "",
        alamat: "",
        jenis_kelamin: "",
        no_hp: "",
      },
      currentAkun: {},
    };
  },
  mounted: function () {
    this.getAllAkun();
  },
  methods: {
    getAllAkun() {
      axios
        .get("https://bookbuku1.000webhostapp.com/baru/akun/all.php")
        .then((res) => {
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            // console.warn(res.data.users);
            this.akun = res.data.akun;
          }
        });
    },
    addAkun() {
      var formData = this.toFormData(this.newAkun);
      axios
        .post(
          "https://bookbuku1.000webhostapp.com/baru/akun/register.php",
          formData
        )
        .then((res) => {
          this.newAkun = {
            username: "",
            password: "",
            ttl: "",
            alamat: "",
            jenis_kelamin: "",
            no_hp: "",
          };
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAllAkun();
          }
        });
    },
    updateAkun() {
      var formData = this.toFormData(this.currentAkun);
      axios
        .post(
          "https://bookbuku1.000webhostapp.com/baru/akun/update.php",
          formData
        )
        .then((res) => {
          this.currentAkun = {};
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAllAkun();
          }
        });
    },
    hapusPerpus() {
      var formData = this.toFormData(this.currentAkun);
      axios
        .post(
          "https://bookbuku1.000webhostapp.com/baru/akun/hapus.php",
          formData
        )
        .then((res) => {
          this.currentAkun = {};
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAllAkun();
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
    selectPerpus(akun) {
      this.currentAkun = akun;
    },
    clearMsg() {
      this.errorMsg = "";
      this.successMsg = "";
    },
    redirectBack3() {
      this.$router.push('/home');
    },
  },
};
</script>

<style>
</style>