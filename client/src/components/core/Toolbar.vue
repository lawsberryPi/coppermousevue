<template>
  <v-toolbar
    app
    flat
    card
    :extended="true"
  >
    <v-toolbar-side-icon
      class="md-and-up"
      @click="toggleDrawer"
    />
    <v-container
      mx-auto
      py-0
      :align-content-center="true"
    >
      <v-layout>
              <v-flex xs1>
                <div @click="onGotoMainPage"> 
                  <h3 class="text-xs-center">Copper Mouse INK</h3>
                </div>
              </v-flex>
              <v-flex xs4>
              </v-flex>
              <v-flex xs2>
                <v-img
                  :src="require('@/assets/logo.png')"
                  class="mr-5 text-xs-center"
                  contain
                  height="100%"
                  width="100%"
                  max-width="150px"
                  max-height="100%"
                  @click="onGotoMainPage"
                />
              </v-flex>
              <v-flex xs4>

              </v-flex>
        <v-spacer /> 
        <v-btn icon>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
        <login/>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>
<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'



  export default {
    name:'toolbar',
   components: {
      login: () => import('@/components/core/Login')
    },
    computed: {
      ...mapGetters(['links'])
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
      },
      onGotoMainPage(){
        console.log("go to main page")
        this.$router.push('/')
      },
      menuClick(){
        console.log('menu has been clicked')
      }
    },
      data () {
    return {
      fav: true,
    menu: false,
    message: false,
    hints: true
    }
  }
  }
</script>
