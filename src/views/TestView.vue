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
            
      <!-- add new drink -->
      <div id="overlay" v-if="showAddModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Drink</h5>
              <button type="button" class="close" @click="showAddModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <form action="#" method="post">
                <div class="form-group">
                  <input type="number" name="isbn" class="form-control form-control-lg" placeholder="ISBN" v-model="newPerpus.isbn" />
                </div>
                <div class="form-group">
                  <input type="text" name="judul" class="form-control form-control-lg" placeholder="Judul" v-model="newPerpus.judul" />
                </div>
                <div class="form-group">
                  <input type="text" name="pengarang" class="form-control form-control-lg" placeholder="Pengarang" v-model="newPerpus.pengarang" />
                </div>
                <div class="form-group">
                  <input type="text" name="penerbit" class="form-control form-control-lg" placeholder="Penerbit" v-model="newPerpus.penerbit" />
                </div>
                <div class="form-group">
                  <input type="text" name="tahun_terbit" class="form-control form-control-lg" placeholder="Tanggal Terbit" v-model="newPerpus.tahun_terbit" />
                </div>
                <div class="form-group">
                  <input type="text" name="kategori" class="form-control form-control-lg" placeholder="Kategori" v-model="newPerpus.kategori" />
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-info btn-block btn-lg"
                    style="color: white"
                    @click="
                      showAddModal = false;
                      addPerpus();
                      clearMsg();
                    "
                  >
                    Tambahkan Buku
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

            <!-- Edit drink -->
      <div id="overlay" v-if="showEditModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Drink</h5>
              <button type="button" class="close" @click="showEditModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <form action="#" method="post">
                <div class="form-group">
                  <input type="number" name="isbn" class="form-control form-control-lg" v-model="currentperpus.isbn" />
                </div>
                <div class="form-group">
                  <input type="text" name="judul" class="form-control form-control-lg" v-model="currentperpus.judul" />
                </div>
                <div class="form-group">
                  <input type="text" name="pengarang" class="form-control form-control-lg" v-model="currentperpus.pengarang" />
                </div>
                <div class="form-group">
                  <input type="text" name="penerbit" class="form-control form-control-lg" v-model="currentperpus.penerbit" />
                </div>
                <div class="form-group">
                  <input type="text" name="tahun_terbit" class="form-control form-control-lg" v-model="currentperpus.tahun_terbit" />
                </div>
                <div class="form-group">
                  <input type="text" name="kategori" class="form-control form-control-lg" v-model="currentperpus.kategori" />
                </div>

                <div class="form-group">
                  <button
                    class="btn btn-info btn-block btn-lg"
                    style="color: white"
                    @click="
                      showEditModal = false;
                      updatePerpus();
                      clearMsg();
                    "
                  >
                    Update Drink
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            <v-row>
              <v-col md="12">
                <v-col>
                  <v-row>
                    
                    
                   
            <button class="btn btn-info float-right" @click="showAddModal = true">Add Buku</button>
        
        
        <hr class="bg-info" />
        <div class="alert alert-danger" v-if="errorMsg">{{ errorMsg }}</div>
        <div class="alert alert-success" v-if="successMsg">
          {{ successMsg }}
        </div>
        <!-- display data -->
        <div class="row">
          <div class="col-lg-12">
            <table class="table table-bordered table-striped">
              
              <thead>
                <tr class="text-center bg-info text-light">
                  <th>isbn</th>
                  <th>Judul</th>
                  <th>Pengarang</th>
                  <th>penerbit</th>
                  <th>Tahun Terbit</th>
                  <th>kategori</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="perpus in perpus" :key="perpus">
                  <td>{{ perpus.isbn }}</td>
                  <td>{{ perpus.judul }}</td>
                  <td>{{ perpus.pengarang }}</td>
                  <td>{{ perpus.penerbit }}</td>
                  <td>{{ perpus.tahun_terbit }}</td>
                  <td>{{ perpus.kategori }}</td>
                  <td>
                    <a
                      href="#"
                      class="btn btn-success"
                      @click="
                        showEditModal = true;
                        selectPerpus(perpus);
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
                        selectPerpus(perpus);
                      "
                      ><i class="glyphicon glyphicon-trash"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      <!-- Delete drink -->
      <div id="overlay" v-if="showDeleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete Drink</h5>
              <button type="button" class="close" @click="showDeleteModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <h4>Are you Sure to Delete this Drink?</h4>
              <h5>You Are Deleting {{ currentperpus.judul }}</h5>
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
              <button class="btn btn-success btn-lg" @click="showDeleteModal = false">No</button>
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
import axios from 'axios';

export default {
  name: 'DrinkView',

  data: () => {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      errorMsg: '',
      successMsg: '',
      perpus: [],
      newPerpus: {
        isbn: '',
        judul: '',
        pengarang: '',
        penerbit: '',
        tahun_terbit: '',
        kategori: '',
      },
      currentperpus: {},
    };
  },
  mounted: function () {
    this.getAllperpus();
  },
  methods: {
    getAllperpus() {
      axios.get('https://bookbuku1.000webhostapp.com/baru/katalog_buku/all.php').then((res) => {
        if (res.data.error) {
          this.errorMsg = res.data.message;
        } else {
          // console.warn(res.data.users);
          this.perpus = res.data.perpus;
        }
      });
    },
    addPerpus() {
      var formData = this.toFormData(this.newPerpus);
      axios.post('https://bookbuku1.000webhostapp.com/baru/katalog_buku/tambah.php', formData).then((res) => {
        this.newPerpus = {
          isbn: '',
          judul: '',
          pengarang: '',
          penerbit: '',
          tahun_terbit: '',
          kategori: '',
        };
        if (res.data.error) {
          this.errorMsg = res.data.message;
        } else {
          this.successMsg = res.data.message;
          this.getAllperpus();
        }
      });
    },
    updatePerpus() {
      var formData = this.toFormData(this.currentperpus);
      axios.post('https://bookbuku1.000webhostapp.com/baru/katalog_buku/update.php', formData).then((res) => {
        this.currentperpus = {};
        if (res.data.error) {
          this.errorMsg = res.data.message;
        } else {
          this.successMsg = res.data.message;
          this.getAllperpus();
        }
      });
    },
    hapusPerpus() {
      var formData = this.toFormData(this.currentperpus);
      axios.post('https://bookbuku1.000webhostapp.com/baru/katalog_buku/hapus.php', formData).then((res) => {
        this.currentperpus = {};
        if (res.data.error) {
          this.errorMsg = res.data.message;
        } else {
          this.successMsg = res.data.message;
          this.getAllperpus();
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
    selectPerpus(perpus) {
      this.currentperpus = perpus;
    },
    clearMsg() {
      this.errorMsg = '';
      this.successMsg = '';
    },
  },
};
</script>

<style>
</style>