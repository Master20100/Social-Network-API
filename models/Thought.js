const mongoose = require('mongoose');

const thoughtsSchema = new mongoose.Schema(
    {
    thoughtText:{
type:String,
required:true,
minLength:1,
maxLength:280
},

createdAt:{
type:Date,
default:Date.now,
// Use a getter method to format the timestamp on query
get time(){
    return this.createdAt;
}
},
username:{
    type:String,
    required:true
},

// reactions (These are like replies)
// Array of nested documents created with the reactionSchema
reactions:[{
    
}]


})

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = mongoose.model('thought', thoughtsSchema);

module.exports = Thought;