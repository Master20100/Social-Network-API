const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    username:{
    type:String,
    required:true,
    unique:true,
    trim:true
},
email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
    }
},

thoughts:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],

friends:[{
    type: mongoose.Schema.Types.ObjectId,
    //?????
    ref:this}]

})


userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})


const User = mongoose.model('user', userSchema);

module.exports = User;







