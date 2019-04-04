const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const User = require('../../model/Users')

const router = express.Router();

const uri = "mongodb+srv://coppervue:jessie9417@cluster0-dyqdl.mongodb.net/test?retryWrites=true";

// connect to database
  async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    (uri,{useNewUrlParser:true});
    return client.db('coppervue').collection('post')
}

// post users

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
    }else{
      await posts.insertOne({
              name: userName,
              email: userEmail
            }).then( result => {
                res.send({"user":userName, "result":result })
              }
            );
    }
});;
})

// get Posts
router.get('/', async (req, res) => {
    console.log("get is called");
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Post
// router.post('/', async (req, res) => {
//     console.log("post is called");
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//       text: req.body.text,
//       createdAt: new Date()
//     });
//     res.status(201).send();
//   });
  
// Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
  });
// async function loadPostsCollection() {
//   const client = await mongodb.MongoClient.connect(
//     'mongodb://YOUR_OWN_MONGODB',
//     {
//       useNewUrlParser: true
//     }
//   );

//   return client.db('vue_express').collection('posts');
// }
module.exports = router;