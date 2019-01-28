<template>
  <nav class="navbar">
    <ul class="navbar-links">
      <li class="navbar-item"><router-link to="/">Home</router-link> </li>
      <li class="navbar-item"><router-link to="/about">About</router-link></li>
      <li class="navbar-item"><router-link to="/meals">Meals</router-link></li>
      <li class="navbar-item"> <router-link to="/beers">Beers</router-link></li>
      <li class="navbar-item" v-if="isLogged"> <router-link to="/dashboard">Dashboard</router-link></li>
    </ul>
    <div class="navbar-user" v-if="isLogged">
      <p class="navbar-username">{{ user.displayName }}</p>
      <div class="navbar-img">
        <img :src="user.photoURL" class="img-responsive img-circle"/>
      </div>
      <b-button @click="$emit('logout')" variant="outline-secondary" size="sm">Logout</b-button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    user: Object,
    isLogged: Boolean,
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-links {
  list-style: none;
  display: flex;
}
.navbar-item {
  margin: 0 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar-img {
  max-width: 50px;
}

.navbar-user {
  display: flex;
  align-items: center;
}

.navbar-username {
  margin: 0;
  display: inline;
}

.navbar-img {
  margin: 0 10px;
  padding: 0 5px;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

.img-circle {
  border-radius: 50% 50%;
}
</style>
