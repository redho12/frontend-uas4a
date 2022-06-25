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
            <v-row>
              <v-col md="12">



                    <v-col>
            <v-row>
                      
                          <button
                            class="btn btn-primary float-right"
                            @click="showAddModal = true"
                          >
                            <i class="fas fa-data"></i>&nbsp;&nbsp;Tambahkan Nama
                          </button>
                     <v-card>
                     </v-card>
            </v-row>
                    </v-col>
           
                      
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
                              <tr
                                class="text-center bg-warning text-light"
                                style="font-size: 18px"
                              >
                                <th>Nama Lengkap</th>
                                <th>Id Perpustakaan</th>
                                <th>TT Lahir</th>
                                <th>Alamat</th>
                                <th>Jenis Kelamin</th>
                                <th>No Hp</th>
                                <th>Edit</th>
                                <th>Hapus</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                class="text-center"
                                v-for="user in data"
                                :key="user"
                                style="font-size: 14px"
                              >
                                <td>{{ user.username }}</td>
                                <td>{{ user.password }}</td>
                                <td>{{ user.ttl }}</td>
                                <td>{{ user.alamat }}</td>
                                <td>{{ user.jenis_kelamin }}</td>
                                <td>{{ user.no_hp }}</td>
                                <td>
                                  <a
                                    href="#"
                                    class="btn btn-success"
                                    @click="
                                      showEditModal = true;
                                      selectUser(user);
                                    "
                                    ><i class="glyphicon glyphicon-edit"></i
                                  ></a>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    class="btn btn-danger"
                                    @click="
                                      showDeleteModal = true;
                                      selectUser(user);
                                    "
                                    ><i class="glyphicon glyphicon-trash"></i
                                  ></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                   

                    <!-- add new member -->
                    <div id="overlay" v-if="showAddModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Tambahkan Anggota Baru</h5>
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
                                <input
                                  type="text"
                                  name="username"
                                  class="form-control form-control-lg"
                                  placeholder="Nama Lengkap"
                                  v-model="newdata.username"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="password"
                                  class="form-control form-control-lg"
                                  placeholder="ID Perpustakaan"
                                  v-model="newdata.password"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="ttl"
                                  class="form-control form-control-lg"
                                  placeholder="Tempat, Tanggal Lahir"
                                  v-model="newdata.ttl"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="alamat"
                                  name="alamat"
                                  class="form-control form-control-lg"
                                  placeholder="Alamat"
                                  v-model="newdata.alamat"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="tel"
                                  name="phone"
                                  class="form-control form-control-lg"
                                  placeholder="Jenis Kelamin"
                                  v-model="newdata.jenis_kelamin"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="no_hp"
                                  class="form-control form-control-lg"
                                  placeholder="No Hp"
                                  v-model="newdata.no_hp"
                                />
                              </div>
                              
                              <div class="form-group">
                                <button
                                  class="btn btn-info btn-block btn-lg"
                                  style="color: white"
                                  @click="
                                    showAddModal = false;
                                    adddata();
                                    clearMsg();
                                  "
                                >
                                  Tambah Member
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Edit member -->
                    <div id="overlay" v-if="showEditModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Edit Member</h5>
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
                                  name="username"
                                  class="form-control form-control-lg"
                                  v-model="currentUser.username"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="password"
                                  class="form-control form-control-lg"
                                  v-model="currentUser.password"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="ttl"
                                  class="form-control form-control-lg"
                                  v-model="currentUser.ttl"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="alamat"
                                  name="alamat"
                                  class="form-control form-control-lg"
                                  v-model="currentUser.alamat"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="tel"
                                  name="phone"
                                  class="form-control form-control-lg"
                                  v-model="currentUser.jenis_kelamin"
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="no_hp"
                                  class="form-control form-control-lg"
                                  v-model="currentUser.no_hp"
                                />
                              </div>
                              
                              
                              <div class="form-group">
                                <button
                                  class="btn btn-info btn-block btn-lg"
                                  style="color: white"
                                  @click="
                                    showEditModal = false;
                                    updateUser();
                                    clearMsg();
                                  "
                                >
                                  Update Member
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Delete member -->
                    <div id="overlay" v-if="showDeleteModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Hapus Member</h5>
                            <button
                              type="button"
                              class="close"
                              @click="showDeleteModal = false"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body p-4">
                            <h4>Apakah Kamu Yakin Ingin Menghapus Member Ini ?</h4>
                            <h5>
                              You Are Deleting {{ currentUser.username }}
                            </h5>
                            <hr />
                            <button
                              class="btn btn-danger btn-lg"
                              @click="
                                showDeleteModal = false;
                                deleteUser();
                                clearMsg();
                              "
                            >
                              Ya
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button
                              class="btn btn-success btn-lg"
                              @click="showDeleteModal = false"
                            >
                              Tidak
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
            




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
  name: "TesView",
  data: () => {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      errorMsg: "",
      successMsg: "",
      data: [],
      newdata: {
        username: "",
        password: "",
        ttl: "",
        alamat: "",
        jenis_kelamin: "",
        no_hp: "",
      },
      currentUser: {},
    };
  },
  mounted: function () {
    this.getAlldata();
  },
  methods: {
    getAlldata() {
      axios
        .get(
          "https://bookbuku1.000webhostapp.com/baru/riwayat/all.php"
        )
        .then((res) => {
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            // console.warn(res.data.data);
            this.data = res.data.data;
          }
        });
    },
    adddata() {
      var formData = this.toFormData(this.newdata);
      axios
        .post(
          "https://api-pegawai.000webhostapp.com/UAS_PWEB/api.php?action=create",
          formData
        )
        .then((res) => {
          this.newdata = {
            username: "",
            password: "",
            ttl: "",
            alamat: "",
            jenis_kelamin: "",
            no_hp: "",
            salary: "",
            department_id: "",
          };
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAlldata();
          }
        });
    },
    updateUser() {
      var formData = this.toFormData(this.currentUser);
      axios
        .post(
          "https://api-pegawai.000webhostapp.com/UAS_PWEB/api.php?action=update",
          formData
        )
        .then((res) => {
          this.currentUser = {};
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAlldata();
          }
        });
    },
    deleteUser() {
      var formData = this.toFormData(this.currentUser);
      axios
        .post(
          "https://api-pegawai.000webhostapp.com/UAS_PWEB/api.php?action=delete",
          formData
        )
        .then((res) => {
          this.currentUser = {};
          if (res.data.error) {
            this.errorMsg = res.data.message;
          } else {
            this.successMsg = res.data.message;
            this.getAlldata();
          }
        });
    },
    toFormData(obj) {
      var fd = new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
    },
    selectUser(user) {
      this.currentUser = user;
    },
    clearMsg() {
      this.errorMsg = "";
      this.successMsg = "";
    },
  },
};
</script>

<style>
</style>