<template>
  <div class="home">
    <b-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home page</h1>
    <b-row>
      <b-col sm="12">
        <router-link class="btn btn-primary" to="/login" v-if="!authenticated">Login</router-link>
      </b-col>
      <b-col sm="12" class="mt-4">
        <router-link :to="{name: 'aboutProject'}" class="btn btn-secondary">
          About configuration
        </router-link>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated
    })
  },
  created() {},
  components: {}
};
</script>
