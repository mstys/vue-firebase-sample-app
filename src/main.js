import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import types from './store/types';

import firebase from 'firebase';
import './firebaseConfig';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

/**
 * Directives
 */
import clickOutside from '@/lib/directives/click-outside';

Vue.directive('click-outside', clickOutside);

Vue.config.productionTip = false;

let app = undefined;

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      created() {
        console.log('init user', user);
        if (user) {
          const { email, displayName, photoURL } = user;
          this.$store.dispatch(types.auth.success, {
            email,
            displayName,
            photoURL
          });
        }
      },
      render: h => h(App)
    }).$mount('#app');
  }
});
