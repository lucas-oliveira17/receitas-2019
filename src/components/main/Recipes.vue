<template>
  <ul class="recipes">
    <li class="recipe" v-for="(recipe, index) in recipes" :key="index">
      <Recipe v-bind:recipe="recipes[index]" />
    </li>
  </ul>
</template>

<script>
import recipesBucket from '../../bucket/recipes.js'
import Recipe from '../view/Recipe'

export default {
  name: 'Recipes',
  components: { Recipe },
  data: function () {
    return {
      recipes: recipesBucket
    }
  }
}
</script>

<style lang="sass" scoped>
  .recipes
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    padding: 0
    grid-gap: 40px;
</style>
