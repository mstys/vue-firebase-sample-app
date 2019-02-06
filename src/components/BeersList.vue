<template>
  <div>
    <div v-if="beers.length === 0">
      <font-awesome-icon icon="spinner" size="4x" spin />
    </div>
    <transition name="slide-fade-down" appear v-else>
      <vue-bootstrap4-table :rows="beers" :columns="columnsBeers" :config="config">
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
  </div>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table';
import { mapActions, mapState } from 'vuex';
import types from '@/store/types';

export default {
  name: 'beersList',
  components: {
    VueBootstrap4Table,
  },
  computed: {
    ...mapState({
      beers: state => state.beers.all
    })
  },
  created() {
    /**
     * Fetch data
     */
    this.fetchBeers();
  },
  methods: {
    ...mapActions({
      fetchBeers: types.beers.fetch,
      addToCart: types.cart.addToCart
    })
  },
  data() {
    return {
      columnsBeers: [
        {
          label: 'id',
          name: 'id',
          sort: true
        },
        {
          label: 'Name',
          name: 'name',
          sort: true
        },
        {
          label: 'Abv',
          name: 'abv',
          sort: true
        },
        {
          label: 'Ibu',
          name: 'ibu',
          sort: true
        },
        {
          label: 'Ebc',
          name: 'ebc',
          sort: true
        },
        {
          label: 'Ph',
          name: 'ph',
          sort: true
        },
        {
          label: 'Srm',
          name: 'srm',
          sort: true
        },
        {
          label: 'First Brewed',
          name: 'first_brewed',
          sort: true
        },
        {
          label: 'Contributed',
          name: 'contributed_by',
          sort: true
        }
      ],
      config: {
        show_refresh_button: false,
        show_reset_button: false,
        card_title: 'Beers',
        global_search: {
          placeholder: 'Search...',
          visibility: true,
          case_sensitive: false
        }
      }
    };
  }
};
</script>

<style lang="scss">
.beer-list {
  list-style: none;

  li {
    padding: 10px;
    cursor: pointer;
  }
}
</style>
