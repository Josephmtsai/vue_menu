<template>
  <n-card title="JS Error 2">
    <n-button @click="jsError()">Submit</n-button>
  </n-card>
</template>

<script>
import AllowItems from '../filter/filter.js';
export default {
  name: 'TestButton',
  data() {
    item: '';
  },
  created() {},
  methods: {
    jsError() {
      this.item = AllowItems('test');
    },
  },
};
</script>
