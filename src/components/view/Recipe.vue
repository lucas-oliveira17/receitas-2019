<template>
    <div v-bind:style="{ background: `linear-gradient(to right, ${gradient}), url(${recipe.images[0]}) no-repeat center` }" class="recipe__content">
        <div class="recipe__texts">
          <span class="title">{{ recipe.title }}</span>
          <span class="type">{{ recipe.type }}</span>
        </div>
        <!-- <span class="author">{{ recipe.author }}</span>
         <ul class="ingredients"><h3>Ingredients</h3>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <h4 class="prepareMode">{{ recipe.prepareMode }}</h4>
        <span class="duration">{{ recipe.duration }} segundos</span>
        <span class="likes">{{ recipe.likes }}</span>
        <span class="dislikes">{{ recipe.dislikes }}</span> -->
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      gradient: '#00000069, #ff000047'
    }
  },
  props: {
    recipe: {
      title: String,
      type: String,
      author: String,
      ingredients: Array,
      prepareMode: String,
      duration: Number,
      likes: Number,
      dislikes: Number,
      images: Array
    }
  },
  name: 'Recipe'
}
</script>

<style lang="sass" scoped>
    .recipe__content
        cursor: pointer
        font-family: 'Roboto'
        height: 150px
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-size: cover!important;
        border-radius: 20px;
        color: white
    .recipe__texts
      flex-direction: column;
      display: flex;
      margin-left: 20px
      margin-bottom: 10px
    .title
      font-size: 16px
      font-weight: bold
    .type
      font-size: 12px
</style>
