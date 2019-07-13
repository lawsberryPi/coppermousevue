<template>
  <div id="apparel">
       <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap 
          v-for="(item, index) in imageMaterial"
          :key="index">
            <v-flex xs12>
              <v-card :color="colors[Math.floor(Math.random() * Math.floor(5))]" class="white--text">
                <v-layout>
                  <v-flex xs6>
                    <v-container fluid grid-list-sm>
                        <v-layout>
                          <v-flex xs6 sm4>
                            <v-img
                            id = "starFront"
                            :src="item.front"
                            height="100%"
                            width="100%"
                            @click="onZoom('front',index)"
                            ></v-img>
                          </v-flex>
                          <v-flex xs6 sm4>
                            <v-img
                            id = "starBack"
                            :src="item.back"
                            height="100%"
                            width="100%"
                            @click="onZoom('back',index)"
                            ></v-img>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{item.title}}</div>
                        <div pt-2>{{item.price}}</div>
                      </div>
                    </v-card-title>
                    <v-btn icon large>
                        <v-icon @click="addToCart(item)" large color="white">add_shopping_cart</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Rate this design
                  <v-spacer></v-spacer>
                  <rating-api/>
                </v-card-actions>
              </v-card>
            </v-flex>
            <zoom-modal
              :index="index"
              :dialog="item.frontModel"
              :image="item.front"
              :close="closeZoomFront"
            />
            <zoom-modal
              :index="index"
              :dialog="item.backModel"
              :image="item.back"
              :close="closeZoomBack"
            />
          </v-layout>
        </v-container>
      </v-card>
  </div>
</template>
<script>

import Vue from 'vue'
import PostService from '../PostService'
import axios from 'axios'


export default {
  mounted() {
    var thisObj = this
     var pageDiscription = PostService.getLists().then(
      res => {
        res.data.forEach(listItem => {
          if(listItem.category_path.indexOf('Clothing')>-1){
          console.log(listItem.price)
          // thisObj.eachList = {"price": listItem.price, "title":listItem.title, "images":[]}
          thisObj.listingItems.push( {"list_id":listItem.listing_id ,"price": listItem.price, "title":listItem.title, "images":[]})
            PostService.getImageUrl(listItem.listing_id).then(
              imageUrlResponse => {
                imageUrlResponse.data.forEach(eachImage => {
                const itemIndex = thisObj.listingItems.findIndex(eachItem => eachItem.list_id ===eachImage.listing_id )
                thisObj.listingItems[itemIndex].images.push(thisObj.eachList)
                })
                console.log(thisObj)
              }
            )
          }
        })
      }
    )
  },
    components: {
        ZoomModal: () => import('@/components/ZoomModal'),
        RatingApi: () => import('@/components/RatingProduct')
    },
  data () {
    return {
      eachList:null,
      listingItems:[],
      dialog: false,
      colors:['cyan darken-2','purple', 'deep-purple','indigo', 'blue-grey'],
      imageMaterial:[{front: require('@/assets/apparel/starWarFront.jpg'), back: require('@/assets/apparel/starWarBack.jpg'),
      title:'Buzz Light Year', price: '$25', frontModel:false, backModel:false},
            { front: require('@/assets/apparel/polishFront.jpg'), back: require('@/assets/apparel/polishBack.jpg'), 
      title:'Polish Proud', price: '$20', frontModel:false, backModel:false}],
    }
  },
    methods:{
      onZoom(e, index){
        if (e === "front"){
            this.imageMaterial[index].frontModel = true
        }
      else{
          this.imageMaterial[index].backModel = true
      }
    },
    closeZoomFront(index){
      this.imageMaterial[index].frontModel = false
      console.log(index)
    },
    closeZoomBack(index){
      this.imageMaterial[index].backModel = false
      console.log(index)
    },
    addToCart(addItem){
      console.log(addItem)
    }
  }
}
</script>
