<template>
    <v-card
      max-width="100%"
      max-height="100%"
      class="mx-auto"
    >
      <v-layout
        py-4
        pl-4
      >
        <v-flex xs8>
          <v-img
            height="100%"
            width="100%"
            :src="require(`@/assets/etching/growler.jpg`)"
          ></v-img>
        </v-flex>
        <v-flex xs4>
          <v-container
            grid-list-lg
            pa-0
          >
            <v-layout column>
              <v-flex>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
</template>
<script>
export default {
    
}
</script>

