const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    maxLength: 32,
    trim: true
   },
   lastname: {
       type: String,
       maxLength: 32,
       trim: true
   },
   email: {
       type: String,
       trim: true,
       required: true,
       unique: true
   },
   userinfo: {
       type: String,
       trim: true
   },
   encry_password: {
       type: String,
       required: true,
   },
   salt: String,
   role: {
       type: Number,
       default: 0
   },
   purchases: {
       type: array,
       default: []
   }
}, {timestamps: true});

userSchema.virtual("password")
    .set(function(password) {
        this._password = password8
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password)
    })
    .get(function(){
        return this._password
    })

userSchema.method = {
    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword: function(plainpassword){ 
        if (!password) return "";
        try{
            return crypto.creareHmac('sha256',this.salt)
            .update(plainpassword)
            .digest('hex')
        }catch(err){
            return "";
        }
    }
}
module.exports = mongoose.model("User",userSchema)