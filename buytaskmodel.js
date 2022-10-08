const mongoose = require('mongoose')

const buytaskSchema = mongoose.Schema({
    buy : {
        type: Boolean,
    
    },
    loggedUserData : {
        type: String,
    
    },

    

})




module.exports  = mongoose.model('buytasks',buytaskSchema);
