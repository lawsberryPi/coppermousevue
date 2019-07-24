<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
      <v-list>
          <v-list-tile @click="onClickTshirt">
                <v-list-tile-avatar tile='false'>
                <img src='./../../assets/t_shirt.png' >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="'T-Shirt'"></v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onClickGlass">
            <v-list-tile-avatar tile='false'>
            <img src='./../../assets/vinyl.png' >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Glass Etching'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
            <v-list-tile @click="onClickOther">
                <v-list-tile-avatar tile='false'>
                <img src='./../../assets/invitation.png' >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="'Invitations'"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          <v-list-tile @click="onClickOther">
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
      onClickTshirt (e, item) {
        this.$router.push('apparel')
        // this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      },
      onClickGlass(){
        this.$router.push('etching')
        this.setDrawer(false)
      },
      onClickOther(){
        alert("we are currently not doing this")
      }
      
    },
  data () {
    return {
    }
  }
  }
</script>
