const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

require('dotenv/config')


// app.use(express.urlencoded({ extended: false }));  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)
//This means every time the urls of posts.js would be accessed 'posts' would be added to each url




mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

mongoose.connection.on('connected' , () => {
    console.log('Mongoose is connected')
});

app.listen(3000)



