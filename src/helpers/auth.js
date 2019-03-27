const helpers = {};

helpers.isAuthenticated = (req, res , netx)=>{
     if (req.isAuthenticated()) {
         return netx();
     }else{
         req.flash('error_msg','No autorizado');
         res.redirect('/users/signin');
     }
}; 

module.exports = helpers;