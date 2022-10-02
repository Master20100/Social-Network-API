const router = require("express").Router();
const { User } = require("../../models");


router
    .get('/:id', async (req, res) => {
        const id = req.params.id;
        const user = await User.findOne({ _id: id })
        res.send(user);
    })
    .get('/', async (req, res) => {
        const users = await User.find();
        res.send(users);
    })
    .post('/', async (req, res) => {
        try {
            const user = req.body;
            await User.create(user);
            res.send(req.body);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    }
    )
    .put('/:id', async (req, res) => {
        const filter = { id: req.params.id };
        const update = req.body;
        const user = await User.findOneAndUpdate(filter, update);
        res.send(user);
    })
    .delete('/:id', async (req, res) => {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        if (!user) res.status(404).json({ message: 'No user found with this id' })
        else {User.deleteMany({ _id: { $in: user.thoughts } })
        res.send(user);
    }
    }
    )
    .post('/:userId/friends/:friendId',async(req,res)=>{
         const userId = req.params.userId;
         const friendId = req.params.friendId;
         const user = await User.findOne({ _id: userId });
         user.updateOne(
            { $push: { friends : [ "friendId"] } },


         )

         res.send('user updated');    
        })
     

module.exports = router;
