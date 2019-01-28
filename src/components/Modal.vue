<template>
  <transition name="fade">
    <div class="c-modal-outer">
      <div class="c-modal-background" @click="close"></div>
        <transition name="fade-modal" appear>
          <div class="c-modal">
            <div class="c-modal__inner">
              <button class="btn-close" @click="close">&times;</button>
                <component :is="content"></component>
            </div>
          </div>
        </transition>
    </div>
  </transition>
</template>

<script>
// import Authorization from '@/api/auth';

export default {
  name: 'modal',
  props: ['content'],
  created() {
  },
  computed: {
    modalInner() {
      return this.content;
    }
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.c-modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.c-modal {
  width: 50%;
  height: 500px;
  background-color: white;
  overflow-y: scroll;
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  z-index: 101;

  &__inner {
    height: 100%;
  }
}

.btn-close {
  background: transparent;
  border: none;
  font-size: 2.5em;
  font-weight: 200;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: -5px;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 0.3s ease;
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: all 0.3s 0.3s ease;
  transform-origin: top;
  transform: translate(-50%, -50%);
}

.fade-modal-enter,
.fade-modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -55%);
  transform-origin: top;
  transition: all 0.3s ease;
}
</style>
