<template>
  <div id="apparel">
       <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap 
          v-for="(item, index) in listingItems"
          :key="index">
            <v-flex xs12>
              <v-card :color="colors[Math.floor(Math.random() * Math.floor(5))]" class="white--text">
                <v-layout>
                  <v-flex xs8>
                    <fullscreen ref="fullscreen" class="fullscreen-wrapper" 
                    style="display: flex; justify-content: space-between;width: 100%; height: 100%;">
                    <v-container fluid grid-list-sm>
                        <button type="button" @click="fullscreen(index)">fullscreen</button>
                        <v-layout>              
                          <v-carousel ref="gallery">
                            <v-carousel-item
                              v-for="(imageItem,i) in item.images"
                              :key="i"
                              :src="imageItem.url"
                              reverse-transition="fade"
                              transition="fade"
                              style="width: 100%; height: 100%;"
                            >
                          </v-carousel-item>
                          </v-carousel>
                      </v-layout>
                    </v-container>
                    </fullscreen>
                  </v-flex>
                  <v-flex xs4>
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
          </v-layout>
        </v-container>
        <zoom-modal
        v-if="modalShow"
        :dialog="modalShow"
        :image="zoomImage"
        :close="closeZoomFront"
      />
      </v-card>
  </div>
</template>
<script>

import Vue from 'vue'
import PostService from '../PostService'
import axios from 'axios'
import fullscreen from 'vue-fullscreen'
  Vue.use(fullscreen)


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
                thisObj.listingItems[itemIndex].images.push({"url":eachImage.url_fullxfull, "width":eachImage.full_width})
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
      zoomImage:null,
      modalShow:false,
      eachList:null,
      listingItems:[],
      dialog: false,
      colors:['cyan darken-2','purple', 'deep-purple','indigo', 'blue-grey'],
    }
  },
  computed: {
    galleryWidth:function (){
      const firstLayer = this.$refs.gallery
      const width = firstLayer[0].height
      return width
    }
  },
    methods:{
      fullscreen(index) {
        this.$refs['fullscreen'][index].enter()
      },
      onZoom(e, index){
        if (e === "front"){
            this.imageMaterial[index].frontModel = true
        }
      else{
          this.imageMaterial[index].backModel = true
      }
    },
    closeZoomFront(index){
      this.modalShow = false
      console.log(index)
    },
    closeZoomBack(index){
      this.imageMaterial[index].backModel = false
      console.log(index)
    },
    addToCart(addItem){
      console.log(addItem)
    },
    clickGallery(item){
      this.zoomImage = item
      this.modalShow = true
      console.log(item + "zoom url")
    }
  }
}
</script>
