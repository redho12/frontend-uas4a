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
          </ul>
          <ul class="navbar-nav ml-auto text-light">
            <b-button
              variant="outline-info"
              class="mb-2"
              type="primary"
              @click="redirectLogout()"
            >
              <b-icon icon="power" aria-hidden="true"></b-icon> Logout
            </b-button>
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