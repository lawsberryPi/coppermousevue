const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

const uri = "mongodb+srv://coppervue:jessie9417@cluster0-dyqdl.mongodb.net";

// connect to database
  async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    (uri,{useNewUrlParser:true})
    .catch(err=>{
      console.log("the error come from load post collection", err)
    });
    return client.db('coppervue').collection('post')
}


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
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
  });

module.exports = router;