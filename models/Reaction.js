const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        //Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
        reactionId:{
type: Schema.Types.ObjectId,
},
reactionBody:{
type: String,
required:true,
maxLength: 280
},
username:{
    type:String,
    required:true,
},

// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
createdAt:{
    type: Date.now(),
    default:get(function(){return doc.createdAt })
}
    })

    const Reaction = model('reaction', reactionSchema);

    module.exports = Reaction;