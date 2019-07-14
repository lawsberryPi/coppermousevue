const express = require('express');
const mongodb = require('mongodb');
const axios = require('axios')
const router = express.Router();
var util = require('util')
const shopurl = "https://openapi.etsy.com/v2/shops/19584350?api_key=ykmo87ntibfxhmf7jh1sazfr"
const uri = "mongodb+srv://coppermouse:jessie9417@cluster0-mn8yh.mongodb.net/test?retryWrites=true&w=majority";
const listUrl = "https://openapi.etsy.com/v2/shops/19584350/listings/active?api_key=ykmo87ntibfxhmf7jh1sazfr"
const listBaseUrl = "https://openapi.etsy.com/v2/listings/"
let listProperty = {}

//"mongodb+srv://coppervue:jessie9417@cluster0-dyqdl.mongodb.net/test?retryWrites=true";

// connect to database
  async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    (uri,{useNewUrlParser:true})
    .catch(err=>{
      console.log("the error come from load post collection", err)
    });
    return client.db('coppervue').collection('post')
}

router.get('/getShop', async(req, res) => {
  console.log("request shop info")
  axios.get(shopurl).then(response => {
    console.log(response)
    const result = response.data
    const imageurl = result.image_url_fullxfull
    const userId = result.user_id
    util.inspect(response)
    res.send(JSON.stringify(util.inspect(response)))
  }).catch(err => {
    console.log(err)
  })
})

router.get('/getLists', async(req, res) => {
  responseMethod = res
  axios.get(listUrl).then(response => {
    console.log(response)
    const listInfo = response.data.results
    res.send(listInfo)
    // each lists, jess has 4 lists now
  }).catch(err => {
    console.log(err)
  })
})

router.post('/getImagesUrls', async(imageUrl, res) => {
  const queryString = imageUrl.body
  const imageQuery = listBaseUrl +  queryString.list + '/images?api_key=ykmo87ntibfxhmf7jh1sazfr'
  console.log("image urls: " + imageQuery)
  axios.get(imageQuery).then(imageResult => {
    let fullImages = imageResult.data.results
    res.send(fullImages)
    // each item has x images, therefore we need to iterate through it
  }).catch(err => {
    console.log(err)
  })
})
router.get('/getImagesData', async(imageUrl, res) => {
  axios.get(imageUrl).then(imageResponse => {
    console.log(imageResponse)
    listProperty.data = imageResponse.data
    res.send(listProperty)
  })
})

router.post('/', async (req, res) => {
  const {userName, userEmail} = req.body
  console.log("requested body ===>",{userName,userEmail} )
  const posts = await loadPostsCollection();
  await posts.findOne({email: userEmail})
  .then(async user => {
    console.log(user, "user is ....")
    if(user){
        console.log("user exist")
        res.send({"user":userName, "result":"existed" })
        .catch(err=>{console.log(err,"come from send one")})
    }else{
      await posts.insertOne({
              name: userName,
              email: userEmail
            }).then( result => {
                res.send({"user":userName, "result":result })
              }
            ).catch( err =>{
              console.log(err, "come from insert one")
            });
    }
}).catch(err =>{
  console.log(err, "it comes from find one")
});;
})

// get Posts
router.get('/', async (req, res) => {
    console.log("get is called");
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
  });

module.exports = router;