<template>
  <input type="checkbox" class="reditus__checkbox">
</template>

<style lang="sass">
.reditus
  &__checkbox
    appearance: none
    width: 18px
    height: 18px
    background-color: rgb(206, 4, 4)
    cursor: pointer
    margin-bottom: 0
    border: none
    padding-left: 4px
    transition: all .2s ease-in

    &:hover
      background-color: rgba(160, 1, 1, 1)

input[type=checkbox]:checked:after
  content: "\2714 "
  color: white
</style>
