<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style lang="sass">
#app
  width: 100%
  height: 100%
</style>
