<template>
  <div class="recipes">
    <div class="recipes__top">
      <input type="text" class="recipes__search" placeholder="Busque sua receita..." v-model="searchInput" @keyup="filterRecipes(searchInput)">
    </div>
      <ul class="recipes__list">
        <li class="recipe" v-for="(recipe, index) in recipes" :key="index">
          <Recipe v-bind:recipe="recipes[index]" />
        </li>
      </ul>
  </div>
</template>

<script>
import recipesBucket from '../../bucket/recipes.js'
import Recipe from '../view/Recipe'

export default {
  name: 'Recipes',
  components: { Recipe },
  data: function () {
    return {
      recipes: recipesBucket,
      searchInput: ''
    }
  },
  methods: {
    filterRecipes (filters) {
      return this.recipes.filter(recipe => recipe.title.includes(filters))
    }
  }
}
</script>

<style lang="sass" scoped>
$reditus-darkred: #a00101
$reditus-lightred: #ce0404

.recipes
  &__top
    display: grid
  &__search
    font-size: 20px
    border: 2px solid $reditus-darkred
    font-family: 'Roboto'
    padding: 5px
    justify-self: center
    margin-top: 30px
    margin-bottom: 14px
    &::placeholder
      color: #a5a5ac
  &__list
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    padding: 0
    grid-gap: 40px
</style>
