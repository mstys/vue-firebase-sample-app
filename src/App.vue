<template>
  <div id="app">
    <div id="nav">
      <navbar :user="user" :isLogged="authenticated" @logout="onLogoutClick" />
      {{ cart }}
    </div>
    <router-view />
    <router-view name="modal" />
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapState, mapActions } from 'vuex';
import Navbar from '@/components/Navbar';
import types from './store/types';

export default {
  name: 'app',
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      cart: state => state.cart.length,
      user: state => state.auth.user,
      authenticated: state => state.auth.authenticated
    })
  },
  methods: {
    ...mapActions({
      logout: types.auth.logout
    }),
    onLogoutClick() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.logout();
          this.$router.replace({ name: 'home' });
        })
        .catch((e) => {
          console.error(e);
        });
    }
  },
  data() {
    return {
      showModal: this.$route.meta.showModal,
      prevRoute: this.$route
    };
  },
  created() {}
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-down-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-down-leave-active {
  transition: all 0.8s ease-out
}
.slide-fade-down-enter, .slide-fade-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10%);
  opacity: 0;
}
</style>
