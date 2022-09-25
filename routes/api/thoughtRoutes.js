const router = require("express").Router();
const { Thought } = require("../../models");


router
.get('/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const thought = await Thought.findOne({ _id: id })
    res.send(thought);
})
.get('/',async(req,res)=>{
const thought = await Thought.find();
res.send(thought);
})
.post('/',async(req,res)=>{
const thought = req.body;
Thought.create(thought);
res.send('thought added');
})
.put('/:id',async(req,res)=>{
    const filter = { id: req.params.id };
    const update = req.body;
    Thought.findOneAndUpdate(filter,update)
})
.put('/:id',async(req,res)=>{
    const filter = { id: req.params.id };
    const update = req.body;
    await Thought.findOneAndUpdate(filter,update);
    res.send('thought updated');
})





module.exports = router;










// api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }










