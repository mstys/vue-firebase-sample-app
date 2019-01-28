<template>
<div v-if="!loading">
  <p>beer details  {{ $route.params.id }}</p>
  <h3>{{ beer.name }}</h3>
  <p>{{ beer.description}}</p>
  <img :src="beer.image_url" />
</div>
</template>

<script>
import BeerApi from '@/api/beers';

export default {
  name: 'beerDetails',
  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: false,
      beer: {},
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      BeerApi.getBeers(this.$route.params.id).then((data) => {
        console.log(data);
        this.beer = { ...data[0] };
        this.loading = false;
      });
    },
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
  },
};
</script>
