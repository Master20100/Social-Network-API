const router = require("express").Router();
const { Thought } = require("../../models");


router
    .get('/:id', async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const thought = await Thought.findOne({ _id: id })
        res.send(thought);
    })
    .get('/', async (req, res) => {
        const thought = await Thought.find();
        res.send(thought);
    })
    .post('/', async (req, res) => {
        const thought = req.body;
        Thought.create(thought);
        res.send(thought);
    })
    .put('/:id', async (req, res) => {
        const filter = { id: req.params.id };
        const update = req.body;
        Thought.findOneAndUpdate(filter, update);
        res.send(update);
    })
    .delete('/:id', async (req, res) => {
        const thought = await Thought.findOneAndDelete({ _id: req.params.id });
        if (!thought) res.status(404).json({ message: 'No though found with this id' })
        else Thought.deleteMany({ _id: { $in: thoughts.reaction } })
    })




module.exports = router;