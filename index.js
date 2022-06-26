const express = require('express');
const { indexRouter } = require('./api');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

app.listen(4000,()=>{
    console.log('running on port 4000')
})
