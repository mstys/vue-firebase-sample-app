<template>
  <div class="cart"> cart
    <cart-item
      v-for="(item, index) in cart"
      :key="item.product.id + index"
      @add-amount="incAmount(item.product.id)"
      @dec-amount="decAmount(item.product.id)"
      :item="item"
    ></cart-item>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CartItem from '@/components/cart/CartItem';
import types from '@/store/types';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  methods: {
    ...mapActions({
      incAmount: types.cart.incAmount,
      decAmount: types.cart.decAmount,

    }),
  }
};
</script>

<style lang="scss">
.cart {
  width: 500px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
}
</style>
