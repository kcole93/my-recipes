<template>
  <Layout>
    <section class="section">
      <div class="tile is-ancestor is-flex-wrap-wrap is-justify-content-center">
      <div v-for="recipe in $page.recipes.edges" :key="recipe.node.id"
      class="tile is-parent is-3 is-flex-direction-column is-flex-shrink-1">
      <recipe-card :recipe="recipe.node"/>
      </div>
      </div>
    </section>

  </Layout>
</template>

<page-query>
query {
  recipes:
    allRecipes {
      edges {
        node {
          id
          recipeName
          rating
          path
          tags {
            id
            tagName
            path
          }
          genre {
            id
            genreName
            path
          }
          picture {
            id
            url
            thumbnails {
              large {
                url
              }
            }
          }

        }
      }
    }
  genres: allGenres {
        edges {
          node {
            id
            genreName
          }
        }
  }
}
</page-query>

<script>
import RecipeCard from '../components/RecipeCard.vue'
export default {
  components: { RecipeCard },
  metaInfo: {
    title: 'My Recipes'
  },
  data () {
    return {
      loadedGenres: [],
      selectedGenres: []
    }
  },
  created: function () {
      console.log("Got Genres")
      this.loadedGenres = this.$page.genres.edges
      this.selectedGenres = this.$page.genres.edges
  },
  methods: {
    removeGenre: function (genreIdx) {
      return this.selectedGenres.splice(genreIdx, 1)
    }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>