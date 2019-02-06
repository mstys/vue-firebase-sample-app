import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import types from './store/types';

/* Firebase */
import firebase from 'firebase';
import './firebaseConfig';

/* Bootstrap */
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

/* Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faSort,
  faSortUp,
  faSortDown,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faSort, faSortUp, faSortDown, faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/**
 * Directives
 */
import clickOutside from '@/lib/directives/click-outside';

Vue.directive('click-outside', clickOutside);

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      created() {
        if (user) {
          const { email, displayName, photoURL } = user;
          // Save user data in vuex
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
