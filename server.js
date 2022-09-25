const express = require('express');
const db = require('./config/connection');
const {Reaction,Thought,User} = require('./models');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.post('/new',async(req,res)=>{
    const user = await User.create(req.body);
    console.log(user);
    res.send(user)


})

app.get('/allusers',async(req,res)=>{
    const allusers = await User.find();
    console.log(allusers);
    res.send(allusers);
    

});


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  