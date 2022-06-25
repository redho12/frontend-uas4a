<template>
  <v-container>
    <b-button size="sm" class="mb-2" @click="redirectBack3()">
      <b-icon icon="arrow-left" aria-hidden="true"></b-icon>
    </b-button>
    <v-layout wrap style="margin-top: 5px">
      <v-flex sm12 md20 offset-md20>
        <h2 class="text-light bg-dark text-center">Data Nama Peminjam Buku</h2>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                <template>
                  <v-dialog v-model="dialogAdd" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Tambahkan Baru
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Tambahkan Nama Baru</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                label="Nama Lengkap"
                                v-model="nama_lengkap"
                                required
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                                label="ID Perpustakaan"
                                v-model="password"
                                required
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                                label="Tempat, Tanggal Lahir"
                                v-model="ttl"
                                required
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                                label="Alamat"
                                v-model="alamat"
                                required
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                                label="Jenis Kelamin"
                                v-model="jenis_kelamin"
                                required
                              >
                              </v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                                label="No Hp"
                                v-model="no_hp"
                                required
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialogAdd = false"
                          >Close</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="savenama"
                          >Save</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>

                <!-- Modal Update -->
                <template>
                  <v-dialog v-model="dialogEdit" persistent max-width="600px">
                    <v-card>
                      <v-card-title>
                        <span class="headline">Update Nama</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                label="Name Lengkap"
                                v-model="nama_lengkapEdit"
                                required
                              >
                              </v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="ID Perpustakaan"
                                v-model="id_perpustakaanEdit"
                                required
                              >
                              </v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Tempat, Tanggal Lahir"
                                v-model="ttlEdit"
                                required
                              >
                              </v-text-field>
                              <v-col cols="12">
                                <v-text-field
                                  label="Alamat"
                                  v-model="alamatEdit"
                                  required
                                >
                                </v-text-field>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Jenis Kelamin"
                                    v-model="jenis_kelaminEdit"
                                    required
                                  >
                                  </v-text-field>
                                  <v-col cols="12">
                                    <v-text-field
                                      label="No Hp"
                                      v-model="no_hpEdit"
                                      required
                                    >
                                    </v-text-field>
                                  </v-col>
                                </v-col>
                              </v-col>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialogEdit = false"
                          >Close</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="updatenama"
                          >Update</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>

                <!-- Modal Delete Nama -->
                <template>
                  <v-dialog v-model="dialogDelete" persistent max-width="600px">
                    <v-card>
                      <v-card-title>
                        <span class="headline"></span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <h2>
                              Are sure want to delete {{ nama_lengkapDelete }} ?
                            </h2>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialogDelete = false"
                          >No</v-btn
                        >
                        <v-btn color="info darken-1" text @click="deletenama"
                          >Yes
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>

                <template>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">#</th>
                          <th class="text-left">Nama Lengkap</th>
                          <th class="text-left">ID Perpustakaan</th>
                          <th class="text-left">Tempat, Tanggal Lahir</th>
                          <th class="text-left">Alamat</th>
                          <th class="text-left">Jenis Kelamin</th>
                          <th class="text-left">No Hp</th>
                          <th class="text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(product, index) in products"
                          :key="product.product_id"
                        >
                          <td>{{ index + 1 }}</td>
                          <td>{{ product.product_name }}</td>
                          <td>{{ product.product_price }}</td>
                          <td>
                            <v-btn
                              color="info"
                              depressed
                              small
                              @click="getEdit(product)"
                            >
                              Edit
                            </v-btn>
                            <v-btn
                              color="error"
                              depressed
                              small
                              @click="getDelete(product)"
                            >
                              Delete
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </template>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>