<template>
    <div class="home">
        <nav class="navbar">
          <div class="sandwich__area">
            <Sandwich />
          </div>
          <div class="logo">
            <ReditusLogo />
          </div>
        </nav>
    </div>
</template>

<script>
import ReditusLogo from './tools/ReditusLogo'
import Sandwich from './tools/Sandwich'

export default {
  name: 'Home',
  components: {
    ReditusLogo, Sandwich
  }
}
</script>

<style lang="sass">
$reditus-darkred: #a00101
$reditus-lightred: #ce0404

.navbar
  height: 55px
  background: linear-gradient(to right, $reditus-lightred, $reditus-darkred)
  display: flex
  align-items: center
</style>
