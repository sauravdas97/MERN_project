import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'


const app = express();

app.use(bodyParser.json({ limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }));
app.use(cors());

app.use('/posts', postRoutes); // all routes start with "localhost:5000/posts"

const CONNECTION_URL = "mongodb://localhost:27017/MernAppDB"
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true } )
    .then( () => {
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}`);
        })
    })
    .catch( (error) => {
        console.log(error.message);
    })
