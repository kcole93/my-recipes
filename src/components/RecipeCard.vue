<template>
    <div class="card my-2">
        
        <div class="card-image">
            <figure class="image is-3by2">
                    <g-link :to="recipe.path"><img :draggable="false" :src="recipe.picture[0].thumbnails.large.url"></g-link>
            </figure>
        </div>
        <div class="card-content">
            <g-link :to="recipe.path"><p class="title is-4 is-family-secondary has-text-centered mb-2">
                {{ recipe.recipeName }}
            </p></g-link>
        
            <div class="rating" v-if="rate > 0">
                <b-icon v-for="n in rate" :key="n" pack="fas" icon="star"></b-icon>
            </div>
            <div class="section py-4 is-flex is-flex-wrap-row is-justify-content-center">
                <b-taglist>
                    <b-tag class="is-primary has-text-weight-bold is-justify-content-center" v-for="genre in recipe.genre" :key="genre.id"><g-link :to="genre.path">{{genre.genreName}}</g-link></b-tag>
                    <b-tag class="is-justify-content-center mx-2" v-for="tag in recipe.tags" :key="tag.id"><g-link :to="tag.path">{{tag.tagName}}</g-link></b-tag>
                </b-taglist>
            </div>
        </div>
        
    </div>

</template>

<script>
export default {
    name: "RecipeCard",
    props: {
        recipe: Object,
    },
    data () {
        return {
            rate: (this.recipe.rating != null) ? this.recipe.rating : 0
        }
    }
}
</script>

<style scoped>
.card {
    flex: 1;
    max-width: 600px;
}

img {
    object-fit: cover;
}

.rating {
    display: flex;
    justify-content: center;
    color:coral;
}

.tags {
    justify-content: center;
}
</style>