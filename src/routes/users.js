const expresss = require('express');
const router = expresss.Router();

router.get('/users/signin', (req, res) =>{
    res.render('users/signin');
});

router.get('/users/signup',(req,res)=>{
    res.render('users/signup');
});

module.exports = router;