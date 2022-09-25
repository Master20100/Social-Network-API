const router = require("express").Router();
const { User } = require("../../models");


router
.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const user = await User.findOne({ _id: id })
    res.send(user);
})
.get('/',async(req,res)=>{
const users = await User.find();
res.send(users);
})
.post('/',async(req,res)=>{
    const user = req.body;
    User.create(user);
    res.send('user added');
    }
    )
    .put('/:id',async(req,res)=>{
        const filter = { id: req.params.id };
        const update = req.body;
        await User.findOneAndUpdate(filter,update);
        res.send('user updated');
    })


module.exports = router;
