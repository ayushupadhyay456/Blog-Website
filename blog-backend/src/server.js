//To start server: node src/server.js
//To comment : Shift +alt+a
import {db,connecttoDB} from './db.js'
import express from 'express';
import { MongoClient } from 'mongodb';
const app=express();


app.get("/api/articles/:name",async (req,res)=>
{
    const {name}=req.params;

   

    const article=await db.collection('articles').findOne({name});

    if(article)
    {
    res.json(article);
    }
    else{
        res.sendStatus(404);
    }

})

app.use(express.json()); //Middleware for json format to show 


app.put('/api/articles/:name/upvote',async (req,res)=>
{
        const {name}=req.params;
        await db.collection('articles').updateOne({name},
            {
                $inc:{upvotes:1},
            }
        )

        const article=await db.collection('articles').findOne({name})

        if(article)
        {
        res.json(article);

        }
        else{
            res.send('That article dosent exist')
        }
})


app.post('/api/articles/:name/comments',async(req,res)=>
{
    const {name}=req.params;
    const {postedby,text}=req.body;

    
        await  db.collection('articles').updateOne({name},
            {
                $push:{comments:{postedby,text}},
            })
    const article=await db.collection('articles').findOne({name});
    if(article)
    {
    res.json(article);
    }
    else{
        res.send('That article dosent exist')
    }


})

/* app.post('/hello',(req,res)=>
{
    console.log(req.body);
    res.send(`Hello ${req.body.name}`);
})

app.get('/hello/:name',(req,res)=>
{
    const {name}=req.params;
    res.send(`Hello ${name}!!`)
}) */

connecttoDB(()=>
{console.log("Successfully connected to Database")
 app.listen(8000,()=>{
    console.log("server is listening on port 8000")
})
})


