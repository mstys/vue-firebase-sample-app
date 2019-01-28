<template>
  <div>
    <div v-for="meal in meals" :key="meal.id">
      {{ meal.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import types from '@/store/types';

export default {
  name: 'mealsList',
  computed: {
    ...mapState({
      meals: state => state.meals,
    }),
  },
  methods: {
    ...mapActions({
      fetch: types.meals.fetch,
    }),
  },
  created() {
    this.fetch();
  },
};
</script>

<style scoped>

</style>
