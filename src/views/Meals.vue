<template>
  <b-container class="meals">
    <v-row>
      <h1>Meals page</h1>
    </v-row>
    <v-row>
      <router-link :to="{name: 'createMeal'}" class="btn btn-secondary">
        Add meal
      </router-link>
      <meals-list />
    </v-row>

  </b-container>
</template>

<script>
import MealsList from '@/components/meals/MealsList';

export default {
  name: 'meals',
  components: {
    MealsList,
  },
  created() {

  },
};
</script>
