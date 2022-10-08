const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    adminEmail : {
        type: String,
        required: true,
    },


})




module.exports  = mongoose.model('userdatas',userSchema);
