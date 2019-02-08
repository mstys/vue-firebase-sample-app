<template>
  <div class="dashboard">
    <b-container fluid>
      <b-row>
        <b-col>
          <h1>#Dashboard</h1>
          <h5>Secured access</h5>
          <router-link class="btn btn-primary" to="/dashboard/create">Create customer</router-link>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col md="6">
          <div v-if="customers.length === 0">
            <font-awesome-icon icon="spinner" size="4x" spin />
          </div>
          <transition name="slide-fade-down" appear v-else>
            <vue-bootstrap4-table :rows="customers" :columns="columnsCustomer" :config="config">
              <template slot="sort-asc-icon">
                <font-awesome-icon icon="sort-up" />
              </template>
              <template slot="sort-desc-icon">
                <font-awesome-icon icon="sort-down" />
              </template>
              <template slot="no-sort-icon">
                <font-awesome-icon icon="sort" />
              </template>
            </vue-bootstrap4-table>
          </transition>
        </b-col>
        <b-col md="6">
          <BeersList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table';
import BeersList from '@/components/BeersList';
import { mapState } from 'vuex';

export default {
  components: {
    VueBootstrap4Table,
    BeersList
  },
  computed: {
    ...mapState({
      /**
       * Customers fetched from firestore
       */
      customers: state => state.customers,
    })
  },
  data() {
    return {
      columnsCustomer: [
        {
          label: 'id',
          name: 'id',
          sort: true
        },
        {
          label: 'First Name',
          name: 'firstName',
          sort: true
        },
        {
          label: 'Last Name',
          name: 'lastName',
          sort: true
        },
        {
          label: 'Email',
          name: 'email',
          sort: true
        }
      ],
      config: {
        show_refresh_button: false,
        show_reset_button: false,
        card_title: 'Customers',
        global_search: {
          placeholder: 'Search...',
          visibility: true,
          case_sensitive: false
        }
      }
    };
  },
  name: 'dashboard'
};
</script>
