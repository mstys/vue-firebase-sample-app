<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home page</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link class="btn btn-primary" to="/login">Login</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Authorization from '@/api/auth';

export default {
  name: 'home',
  created() {
  },
  components: {
  },
};
</script>
