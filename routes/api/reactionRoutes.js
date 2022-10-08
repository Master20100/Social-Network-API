const router = require("express").Router();
const { Reaction } = require("../../models");


router
    // .get('/:id', async (req, res) => {
    //     const id = req.params.id;
    //     const reaction = await Reaction.findOne({ _id: id })
    //     res.send(reaction);
    // })
    // .get('/', async (req, res) => {
    //     const reaction = await Reaction.find();
    //     res.send(reaction);
    // })
    .post('/', async (req, res) => {
        const reaction = req.body;
        Reaction.create(reaction);
        res.send(reaction);
    })
    .delete('/:id', async (req, res) => {
        const reaction = await Reaction.findOneAndDelete({ _id: req.params.id });
        if (!reaction) res.status(404).json({ message: 'No reaction found with this id' })
    })


module.exports = router;
