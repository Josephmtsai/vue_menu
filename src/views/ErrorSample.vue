<template>
  <div>
    <n-grid cols="400:2 600:4">
      <n-grid-item>
        <div class="light-green">
          <n-card title="404 request">
            <n-button @click="sendRequestNotFound()">Submit Request</n-button>
          </n-card>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="green">
          <n-card title="500 request">
            <n-button @click="sendRequestSystemError()">Submit Request</n-button>
          </n-card>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="light-green">
          <n-card title="401 request">
            <n-button @click="sendRequestUnauthorized()">Submit Request</n-button>
          </n-card>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="green">
          <n-card title="Js Error">
            <n-button @click="jsError('DAS')">Submit</n-button>
          </n-card>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
import { testNotFound, testUnauthorized, testSystemError } from '@/api/sample';
export default {
  name: 'ErrorSample',
  props: {
    msg: String,
  },
  data() {
    return {
      userData: {},
      convertedData: {},
    };
  },
  created() {},
  methods: {
    async sendRequestNotFound() {
      const response = await testNotFound();
      console.log(response);
    },
    async sendRequestUnauthorized() {
      const response = await testUnauthorized();
      console.log(response);
    },
    async sendRequestSystemError() {
      const response = await testSystemError();
      console.log(response);
    },
    jsError(jsonData) {
      this.convertedData = JSON.parse(jsonData);
    },
  },
};
</script>
