<template>
  <div class="cart-item">
    {{ item.product.name }}
    {{ item.amount }}
    <button @click="$emit('add-amount')">+</button>
    <button @click="$emit('dec-amount')">-</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  computed: {
  },
  props: {
    item: Object,
  },
};
</script>
