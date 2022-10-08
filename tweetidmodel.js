const mongoose = require('mongoose')

const tweetidSchema = mongoose.Schema({
    tweetid : {
        type: String,
    
    },
    email : {
        type : String,
    }
   

    

})




module.exports  = mongoose.model('tweetidtask',tweetidSchema);
