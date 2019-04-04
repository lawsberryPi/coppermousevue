const express = require('express')
const router = express.Router()
// load user model
const User = require('../../model/Users')

// login get
router.get('/login',(req, res) => res.render('login'))

// login handler
router.post('/login', (req, res) => {
    const {name, email} = req.body;
    let error = []
    User.findOne({email: email})
    .then(user => {
        if(user){
            console.log("user exist")
        }else{
            const newUser = new User({
                name,
                email
            });
            newUser.save()
            .then(
                user => {
                    req.flash(
                        'success_msg',
                        'you are in the system now'
                    );
                }
            );
        }
    });
})

// delete handler

router.delete('/delete', (req, res) => {

});



module.exports = router