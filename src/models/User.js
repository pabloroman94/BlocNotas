const mongoose= require('mongoose');
const {Schema}=mongoose;
const bcypt = require('bcryptjs');


const UserSchema= new Schema({
    name: {type: String, required: true},
    email: {type:String, required:true},
    password: {type: String, required:true},
    date: {type: Date, default: Date.now}
});

UserSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcypt.genSalt(10);
    const hash= bcypt.hash(password,salt);
    return hash;
};
UserSchema.methods.matchPassword = async function (password) {
  return await bcypt.compare(password, this.password);  
};

module.exports = mongoose.model('User', UserSchema);