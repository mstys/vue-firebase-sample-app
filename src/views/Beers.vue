<template>
  <div class="beers">
    <div class="page">
      <h1>This is beers page </h1>
      <beers-list></beers-list>
    </div>
    <Modal v-if="showModal" @close-modal="toggleModal" v-click-outside="() => toggleModal(false)" >
      <router-view name="modal"></router-view>
    </Modal>
  </div>
</template>


<script>
// @ is an alias to /src
import BeersList from '@/components/BeersList.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'beers',
  components: {
    BeersList,
    Modal,
  },
  data() {
    return {
      showModal: this.$route.meta.showModal,
    };
  },
  methods: {
    toggleModal(state) {
      this.showModal = state;

      if (!state) {
        this.$router.push({ name: 'beers' });
        document.body.classList.remove('bg-shadow');
      } else {
        document.body.classList.add('bg-shadow');
      }
    },
  },
  watch: {
    $route({ meta }) {
      this.toggleModal(meta.showModal);
    },
  },
};
</script>
