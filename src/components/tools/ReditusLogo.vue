<template>
  <span v-bind:style="{ backgroundColor: logoBackgroundColor, color: color }" class="reditus__logo">reditus</span>
</template>

<script>

export default {
  name: 'ReditusLogo',
  props: {
    logoBackgroundColor: String,
    color: String
  }
}
</script>

<style lang="sass">
$reditus-darkred: #a00101
$reditus-lightred: #ce0404

.reditus
  &__logo
    color: #F0F0F0
    font-size: 2vw
    color: $reditus-darkred
    padding: 0px 9px 2px 9px
    letter-spacing: 2px;
    font-family: 'Maven Pro'
    background-color: #F0F0F0
</style>
