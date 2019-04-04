<template>
        <div class="text-xs-center mt-5">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull"
            half-increments
            hover
          ></v-rating>
        </div>
</template>
<script>
export default {
    name:"RatingApi",
    data: () => ({
        colors: ['green', 'purple', 'orange', 'indigo', 'red'],
        rating: 4.5
    }),
    methods: {
        genColor (i) {
        return this.colors[i]
        }
    }
}
</script>