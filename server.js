const express = require('express');
const db = require('./config/connection');
const {Reaction,Thought,User} = require('./models');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/new',(req,res)=>{
    const user1 =new User(
       req.body
    )
    res.send(user1)


})


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  