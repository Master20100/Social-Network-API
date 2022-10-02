const mongoose = require('mongoose');
const ReactionSchema = require('./Reaction');

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
const thoughtsSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatDate(date)
        },
        username: {
            type: String,
            required: true
        },

        // reactions (These are like replies)
        // Array of nested documents created with the reactionSchema

        reactions: [ReactionSchema]

    })

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = mongoose.model('Thought', thoughtsSchema);

module.exports = Thought;

