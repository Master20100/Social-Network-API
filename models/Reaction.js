const mongoose = require('mongoose');
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const ReactionSchema = new mongoose.Schema(
    {
        
        reactionId:{
type: mongoose.Schema.Types.ObjectId,
default:()=>new mongoose.Types.ObjectId()
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

createdAt:{
  type:Date,
  default:Date.now,
  get: (date)=>formatDate(date)

}
    })

    module.exports = ReactionSchema;