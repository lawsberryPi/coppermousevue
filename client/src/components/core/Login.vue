<template>
    <div>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
    <template v-slot:activator="{ on }">
        <v-btn icon 
        dark
        v-on="on">
            <v-icon>account_box</v-icon>
        </v-btn>
    </template>
        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title v-if="!isSignIn">welcome</v-list-tile-title>
                <v-list-tile-title v-else>{{userName}}, welcome!</v-list-tile-title>
                <v-list-tile-sub-title>-- from Copper Mouse Ink</v-list-tile-sub-title>
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
  
          <v-divider></v-divider>
                <v-btn block color="primary" @click="handleClickSignIn" v-if="!isSignIn">google sign In</v-btn>
                <v-btn block color="primary" @click="handleClickSignOut" v-if="isSignIn">sign out</v-btn>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
</template>
<script>
import PostService from '../../PostService'
import GAuth from 'vue-google-oauth2'
import Vue from 'vue'
import { mapState } from 'vuex';
const gauthOption = {
  clientId: '233063685114-iph55c2beq847967msjhbodns5k34321.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

export default {
  name: 'login',
    components: {
      GAuth
    },
  data: () => ({
      isSignIn: false
  }),
  computed: {
    ...mapState([      
      'userName'   
      ]
    )
  },
  methods: {
    handleClickGetAuth(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        // On success
        return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
      })
      .then(response => {
        // And then
      })
      .catch(error => {
        // On fail do something
      })
    },
    handleClickSignIn(){
      this.$gAuth.signIn()
      .then(async user => {
        console.log('user', user)
        this.isSignIn = this.$gAuth.isAuthorized
        var userInfo={'userName': null, 'userEmail': null}
        userInfo.userName = user.w3.ig
        userInfo.userEmail = user.w3.U3
        var postResult = await PostService.insertPost(userInfo).then(
            response => {
                this.$store.commit('setUserInfo', response.data.user)
                console.log(response)
            }
        )
      })
      .catch(error  => {
        console.log(error)
        // On fail do something
      })
    },
    handleClickSignOut(){
      this.$gAuth.signOut()
      .then(() => {
        // On success do something
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        // On fail do something
      })
    }
  },
}
</script>
