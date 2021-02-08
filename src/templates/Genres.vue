<template>
    <Layout>
        <section class="section">
            <div class="tile is-ancestor is-flex-wrap-wrap is-justify-content-center">
            <div v-for="recipe in $page.genres.recipes" :key="recipe.id"
                class="tile is-parent is-4 is-flex-direction-column is-flex-shrink-1">
            <recipe-card :recipe="recipe"/>
            </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query Genres ($id: ID!) {
    genres: genres (id: $id) {
        id
        genreName
        recipes {
            id
            recipeName
            path
            tags {
                id
                tagName
                path
            }
            genre {
                id
                genreName
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
</page-query>

<script>
import RecipeCard from '../components/RecipeCard.vue'
export default {
    components: {
        RecipeCard
    }
}
</script>