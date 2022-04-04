<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="font-bold text-7xl text-green-500 justify-center items-center">hello</div>
    <div class="hidden md:block md:text-7xl md:text-red-500 lg:block lg:text-9xl lg:text-green-500">showing</div>
    <n-button @click="changeUV()">changeUV</n-button>
    <n-button @click="changeUVByVue()">changeUVByVue</n-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      userData: {},
    };
  },
  created() {
    this.userData = window.uv.data;
  },
  methods: {
    changeUV() {
      window.uv.data = 456;
      console.log(window.uv);
    },
    changeUVByVue() {
      this.userData = 12345678;
      console.log(window.uv);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
