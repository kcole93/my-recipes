<template>
    <Layout>
        <section class="section">
            <div class="tile is-ancestor is-flex-wrap-wrap is-justify-content-center">
                <div v-for="recipe in $page.tags.recipes" :key="recipe.id"
                class="tile is-parent is-4 is-flex-direction-column is-flex-shrink-1">
                    <recipe-card :recipe="recipe"/>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query Tags ($id: ID!) {
    tags: tags (id: $id) {
        id
        tagName
        path
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
</page-query>

<script>
import RecipeCard from '../components/RecipeCard.vue'
export default {
    components: {
        RecipeCard
    }
}
</script>