<template>
  <button @click="onClick">{{ countLocal }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
      countLocal: null,
    };
  },
  watch: {
    count: {
      immediate: true,
      handler(countNew) {
        this.countLocal = countNew;
      },
    },
  },
  methods: {
    onClick() {
      this.$emit('update:count', (this.countLocal += 1));
    },
  },
};
</script>
