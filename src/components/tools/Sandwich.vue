<template>
  <div class="sandwich">
    <div class="sandwich__line sandwich__line_1"></div>
    <div class="sandwich__line sandwich__line_2"></div>
    <div class="sandwich__line sandwich__line_3"></div>
  </div>
</template>

<script>
export default {
  name: 'sandwich'
}
</script>

<style lang="sass">
.sandwich
  &__line
    width: 20px
    height: 2px
    background-color: white
    &_2
      margin-top: 3px

    &_3
      margin-top: 3px

  &__area
    margin-left: 20px
    cursor: pointer
</style>
