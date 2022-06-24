<template>
   <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon icon="arrow-left" 
       aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 5px">
      <v-flex sm12 md20 offset-md2>
        <h2 class="text-light bg-dark text-center">Data Nama Peminjam Buku</h2>
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

                  <p class="mt-3">Halaman Saat Ini: {{ currentPage }}</p>
                  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                     <b-form-group
                     id="input-group-1"
                     label="Nama Lengkap:"
                     label-for="input-1"
                     >
                     <b-form-input
                        id="input-1"
                        v-model="form.nama_lengkap"
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
                        v-model="form.id_perpustakaan"
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
                        v-model="form.tt_lahir"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-4"
                     label="Alamat:"
                     label-for="input-4"
                     >
                     <b-form-input
                        id="input-4"
                        v-model="form.alamat"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-5"
                     label="Jenis Kelamin:"
                     label-for="input-5"
                     >
                     <b-form-input
                        id="input-5"
                        v-model="form.jenis_kelamin"
                        type="text"
                        required
                        placeholder=""
                     ></b-form-input>
                     </b-form-group>

                     <b-form-group
                     id="input-group-6"
                     label="No Hp:"
                     label-for="input-6"
                     >
                     <b-form-input
                        id="input-6"
                        v-model="form.no_hp"
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
          'nama_lengkap', 
          'id_perpustakaan', 
          'tt_lahir',
          'alamat',
          'jenis_kelamin',
          'no_hp',
          { key: 'actions', label: 'Actions' }
        ],
        items: [

        ],
        form: {
          nama_lengkap: '',
          id_perpustakaan: '',
          tt_lahir: '',
          alamat: '',
          jenis_kelamin: '',
          no_hp: '',
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
        this.form.nama_lengkap = item.nama_lengkap
        this.form.id_perpustakaan = item.id_perpustakaan
        this.form.tt_lahir = item.tt_lahir
        this.form.alamat = item.alamat
        this.form.jenis_kelamin = item.jenis_kelamin
        this.form.no_hp = item.no_hp
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
          this.items[this.form_index].nama_lengkap = this.form.nama_lengkap
          this.items[this.form_index].id_perpustakaan = this.form.id_perpustakaan
          this.items[this.form_index].tt_lahir = this.form.tt_lahir
          this.items[this.form_index].alamat = this.form.alamat
          this.items[this.form_index].jenis_kelamin = this.form.jenis_kelamin
          this.items[this.form_index].no_hp = this.form.no_hp
        } else { //Insert
          this.items.push({ nama_lengkap: this.form.nama_lengkap, id_perpustakaan: this.form.id_perpustakaan, tt_lahir: this.form.tt_lahir, alamat: this.form.alamat, jenis_kelamin: this.form.jenis_kelamin, no_hp: this.form.no_hp })
        }
        this.form.nama_lengkap = ''
        this.form.id_perpustakaan = ''
        this.form.tt_lahir = ''
        this.form.alamat = ''
        this.form.jenis_kelamin = ''
        this.form.no_hp = ''
        this.form_action = 'Insert'
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.nama_lengkap = ''
        this.form.id_perpustakaan = ''
        this.form.tt_lahir = ''
        this.form.alamat = ''
        this.form.jenis_kelamin = ''
        this.form.no_hp = ''
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