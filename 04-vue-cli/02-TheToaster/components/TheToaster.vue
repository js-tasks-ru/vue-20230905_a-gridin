<template>
  <div class="toasts">
    <UIToast v-for="(toast, index) in toasts" :key="index" :message="toast.message" :type="toast.type" />
  </div>
</template>

<script>
import UIToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UIToast },
  data() {
    return {
      toasts: [],
      counter: 0,
    };
  },
  methods: {
    addToast(type, message, duration = 5000) {
      this.toasts.push({ id: this.counter, type: type, message: message });
      setTimeout(
        (id) => {
          this.toasts = this.toasts.filter(function (obj) {
            return obj.id !== id;
          });
        },
        duration,
        this.counter,
      );
      this.counter++;
    },
    success(message, duration) {
      this.addToast('success', message, duration);
    },
    error(message, duration) {
      this.addToast('error', message, duration);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
