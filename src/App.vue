<template>
  <n-dialog-provider>
    <nav><router-link to="/">Vee Validate</router-link>| <router-link to="/vee-validate-steppers">Vee Validate Steppers</router-link> | <router-link to="/error-sample">Sample of Error</router-link></nav>
    <router-view />
  </n-dialog-provider>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
