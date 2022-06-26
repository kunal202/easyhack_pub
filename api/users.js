const { Router } = require('express');
const userRouter = Router();
let arr = [];
const { createClient } = require('redis');
const publisher = createClient();
publisher.connect().then((data)=>{
    console.log(data,'-------')
}).catch((err)=>{
    console.log(err)
});

userRouter.get('/', (req, res) => {
  res.send('Hello World');
});

userRouter.post('/', async (req, res) => {
  arr.push({ name: req.body.name, age: req.body.age });
  publisher.publish('Logger', JSON.stringify(req.body));
  res.send(arr);
});

module.exports = { userRouter };
