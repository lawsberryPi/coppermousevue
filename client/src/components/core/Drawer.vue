<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
      <v-list>
          <v-list-tile @click="onClick">
                <v-list-tile-avatar tile='false'>
                <img src='./../../assets/t_shirt.png' >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="'T-Shirt'"></v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onClick">
            <v-list-tile-avatar tile='false'>
            <img src='./../../assets/vinyl.png' >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Vinyl'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
            <v-list-tile @click="onClick">
                <v-list-tile-avatar tile='false'>
                <img src='./../../assets/invitation.png' >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="'Invitations'"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          <v-list-tile @click="onClick">
              <v-list-tile-avatar tile='false'>
              <img src='./../../assets/illustration.png' >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Illustration'"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      },
      
    },
  data () {
    return {
    }
  }
  }
</script>
