qwa 
<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('@/assets/articles/T-Shirt-Front-Page.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light" style="color:red;">
            Apparel
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            <b style="color:black;">finding your favorite art piece</b>
          </div>
          <v-btn
            color="primary"
            depressed
            round
            @click="exploreApparel"
          >
            Explore
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>
<<script>
export default {
  name:'ApparelBanner',
  methods: {
    exploreApparel: function(params) {
      console.log(params)
      this.$router.push('apparel')
    }
  },
}
</script>>
