<template>
  <div class="beers">
    <b-container fluid>
      <h1>Beers </h1>
      <h5>Free access</h5>
      <beers-list></beers-list>
    </b-container>
  </div>
</template>


<script>
import BeersList from '@/components/BeersList.vue';

export default {
  name: 'beers',
  components: {
    BeersList,
  },
};
</script>
