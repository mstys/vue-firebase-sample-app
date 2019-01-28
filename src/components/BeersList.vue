<template>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <ul class="beer-list">
        <li v-for="beer in beers" :key="beer.id">
          <router-link :to="{name: 'beerDetails', params: {id: beer.id }}">
            {{ beer.name }}
          </router-link>
          <button @click="addToCart(beer)">Add to cart</button>
        </li>
    </ul>
  </div>
</template>

<script>
import BeerApi from '@/api/beers';
import { mapActions, mapState } from 'vuex';
import types from '@/store/types';

export default {
  name: 'beersList',
  computed: {
    ...mapState({
      beers: state => state.beers.all
    })
  },
  created() {
    this.loading = true;
    this.fetchBeers().then(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions({
      fetchBeers: types.beers.fetch,
      addToCart: types.cart.addToCart,
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
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
