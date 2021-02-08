<template>
    <Layout>
        <div class="recipe-body">
        <section class="section pb-0">
            <h1 class="title is-family-secondary">{{ $page.recipes.recipeName }}</h1>
            <div class="columns">
                <div class="column is-half">
                    <h2 class="subtitle">Cooking Time: {{ secondsToHms($page.recipes.cookingTime)}}</h2>
                </div>
                <div class="column is-offset-4">
                    <template>
                        <b-taglist>
                        <b-tag class="is-primary" v-for="genre in $page.recipes.genre" :key="genre.id"><g-link :to="genre.path">{{ genre.genreName }}</g-link></b-tag>    
                        <b-tag v-for="tag in $page.recipes.tags" :key="tag.id"><g-link :to="tag.path">{{ tag.tagName }}</g-link></b-tag>
                        </b-taglist>
                    </template>
                </div>
            </div>
            <hr>
        </section>
        <section class="section pt-0">
            <div class="block">
                <h1 class="title is-3">Ingredients:</h1>
                <div class="content">
                    <vue-simple-markdown :source="$page.recipes.ingredientsText"/>
                </div>
            </div>
            <div class="block">
                <h1 class="title is-3">Instructions:</h1>
                <div class="content">
                    <vue-simple-markdown :source="$page.recipes.cookingInstructions"/>
                </div>
                </div>
        </section>
        </div>
    </Layout>
</template>

<page-query>
query Recipes ($id: ID!) {
    recipes: recipes (id: $id) {
        id
        recipeName
        rating
        cookingTime
        genre {
            id
            genreName
            path
        }
        tags {
            id
            tagName
            path
        }
        ingredientsText
        cookingInstructions
        notes
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
</page-query>

<script>
export default {
    methods: {
        secondsToHms: function (d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "";
            
            return hDisplay + mDisplay;
        }
    }

}
</script>

<style scoped>


</style>