<template>
  <div class="container">
    <div>
      <b-navbar toggleable="lg" type="light" variant="warning">
        <b-navbar-brand class="text-light">Library Start</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/home"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/contact"
                >Contact</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav ml-auto text-light">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em class="text-light">User</em>
              </template>
              <b-button variant="outline-primary" @click="redirectProfile()">
                <b-icon icon="person-fill"></b-icon> Profile
              </b-button>
              <b-button
                variant="outline-info"
                class="mb-2"
                @click="redirectLogout()"
              >
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
              </b-button>
            </b-nav-item-dropdown>
          </ul>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarA",
  methods: {
    redirectLogout() {
      this.$router.push("/");
    },
    redirectProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style>
</style>