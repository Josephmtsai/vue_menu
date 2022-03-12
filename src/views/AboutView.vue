<template>
  <div class="about">
    <h1>This is an about page</h1>

    {{ userDataList }}
  </div>
</template>
<script>
import { getRandUserData } from '@/api/sample.js';
export default {
  name: 'AboutView',
  data() {
    return {
      userDataList: [],
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      getRandUserData(30).then((data) => {
        userDataList = data.data.resulst;
      });
    },
  },
};
</script>
