<template>
   <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon icon="arrow-left" 
       aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 26px">
      <v-flex sm12 md20 offset-md2>
        <h2 class="text-light bg-dark text-center">Data Riwayat Peminjam Buku</h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                <table class="table table-bordered">
            <div>
                  <b-table
                     id="my-table"
                     :items="items"
                     :fields="fields"
                     :per-page="perPage"
                     :current-page="currentPage"
                     striped 
                     hover
                  >
                     <template v-slot:cell(actions)="row">
                     <b-button size="sm" @click="edit(row.item, row.index, $event.target)" class="mr-1 btn btn-warning">
                        Edit
                     </b-button>
                     <b-button size="sm" @click="del(row.item, row.index, $event.target)" class="mr-1 btn btn-danger">
                        Hapus
                     </b-button>
                     </template>
                  </b-table>
                  <b-pagination
                     v-model="currentPage"
                     :total-rows="rows"
                     :per-page="perPage"
                     aria-controls="my-table"
                  ></b-pagination>

                  <p class="mt-3">Current Page: {{ currentPage }}</p>
                  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                     <b-form-group
                     id="input-group-1"
                     label="ID:"
                     label-for="input-1"
                     >
                     <b-form-input
                        id="input-1"
                        v-model="form.id"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-2"
                     label="ID Perpustakaan:"
                     label-for="input-2"
                     >
                     <b-form-input
                        id="input-2"
                        v-model="form.isbn"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-3"
                     label="TT lahir:"
                     label-for="input-3"
                     >
                     <b-form-input
                        id="input-3"
                        v-model="form.nama"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-3"
                     label="tanggal_pinjam:"
                     label-for="input-3"
                     >
                     <b-form-input
                        id="input-3"
                        v-model="form.tanggal_pinjam"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-3"
                     label="Jenis Kelamin:"
                     label-for="input-3"
                     >
                     <b-form-input
                        id="input-3"
                        v-model="form.tanggal_pengembalian"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-3"
                     label="No Hp:"
                     label-for="input-3"
                     >
                     <b-form-input
                        id="input-3"
                        v-model="form.judul"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-button type="submit" variant="primary">{{ form_action }}</b-button>
                     <b-button type="reset" variant="danger">Reset</b-button>
                  </b-form>
                  <b-card class="mt-3" header="Form Data Result">
                     <pre class="m-0">{{ form }}</pre>
                  </b-card>
             </div>
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
export default {
  
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        fields: [
          'id', 
          'isbn', 
          'nama',
          'tanggal_pinjam',
          'tanggal_pengembalian',
          'judul',
          { key: 'actions', label: 'Actions' }
        ],
        items: [

        ],
        form: {
          id: '',
          isbn: '',
          nama: '',
          tanggal_pinjam: '',
          tanggal_pengembalian: '',
          judul: '',
        },
        show: true,
        form_action : 'Insert',
        form_index : 0,
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    methods: {
      info(item) {
        alert(JSON.stringify(item, null, 2))
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      edit(item, index) {
        alert(JSON.stringify(item, null, 2))
        this.form.id = item.id
        this.form.isbn = item.isbn
        this.form.nama = item.nama
        this.form.tanggal_pinjam = item.tanggal_pinjam
        this.form.tanggal_pengembalian = item.tanggal_pengembalian
        this.form.judul = item.judul
        this.form_action = 'Update'
        this.form_index = index + ((this.currentPage - 1) * this.perPage)
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      del(item, index) {
        this.items.splice(index + ((this.currentPage - 1) * this.perPage), 1)
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        if (this.form_action == 'Update'){
          this.items[this.form_index].id = this.form.id
          this.items[this.form_index].isbn = this.form.isbn
          this.items[this.form_index].nama = this.form.nama
          this.items[this.form_index].tanggal_pinjam = this.form.tanggal_pinjam
          this.items[this.form_index].tanggal_pengembalian = this.form.tanggal_pengembalian
          this.items[this.form_index].judul = this.form.judul
        } else { //Insert
          this.items.push({ id: this.form.id, isbn: this.form.isbn, nama: this.form.nama, tanggal_pinjam: this.form.tanggal_pinjam, tanggal_pengembalian: this.form.tanggal_pengembalian, judul: this.form.judul })
        }
        this.form.id = ''
        this.form.isbn = ''
        this.form.nama = ''
        this.form.tanggal_pinjam = ''
        this.form.tanggal_pengembalian = ''
        this.form.judul = ''
        this.form_action = 'Insert'
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.isbn = ''
        this.form.nama = ''
        this.form.tanggal_pinjam = ''
        this.form.tanggal_pengembalian = ''
        this.form.judul = ''
        this.form_action = 'Insert'
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    redirectBack3() {
      this.$router.push('/home');
    },
  },
}
</script>

<style>

</style>