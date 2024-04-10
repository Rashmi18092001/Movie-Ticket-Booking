const express= require('express')
const mongoose= require('mongoose')
const cors = require('cors')

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded(
    {
        extened:true
    }
))

mongoose.connect('mongodb://127.0.0.1:27017/MovieTicketBooking',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db = mongoose.connection

db.once('open',()=>{
    console.log('Database started')
})


const dataschema = new mongoose.Schema({
    name:String,
    date:String,
    stime: String,
    etime: String,
    star: Number,
    price: Number,

})

const datamodel = mongoose.model('details',dataschema)

app.get('/api/tickets',async(req,res)=>{
    try{

        const item = await datamodel.find()
        res.json(item)
        res.status(201)

    }
    catch(error){
        console.log(error)
        res.json({message:error.message})
    }
})


app.get('/api/tickets/:id',async(req,res)=>{
    try{
        const{id}=req.params
        const item = await datamodel.findById(id)
        res.json(item)
        res.status(201)

    }
    catch(error){
        console.log(error)
        res.json({message:error.message})
    }
})



app.post('/api/tickets',async (req,res)=>{
    try{

        const {name, date, stime, etime, star, price}=req.body;

        const item = new datamodel({name, date, stime, etime, star, price})

        await item.save() 

        
        res.status(201)
        res.json(item)

    }catch(error){
        console.log(error)
        res.json({message:error.message})
    }
})



app.put('/api/tickets/:id',async(req,res)=>{
    try{
        const {name, date, stime, etime, star, price}=req.body;
        const {id} = req.params

        const item = await datamodel.findById(id)

        if (!item) {
            return res.status(404).json({ message: 'Data not found' });
        }

        Object.assign(item, { name, date, stime, etime, star, price });
        await item.save();
        res.json(item);        

    }catch(error){
        console.log(error)
        res.json({message:error.message})
    }
})


app.delete('/api/tickets/:id',async(req,res)=>{
    try{
        const {id}=req.params;

        const item = await datamodel.findById(id)

        if(!item){ 
            res.status(404).json({message:'Data not found'})
        }

            await item.deleteOne()

            res.status(201).json({message:'Data deleted'})

    }catch(error){
        console.log(error)
        res.json({message:error.message})
    }
})



app.listen(8082,()=>{
    console.log('server started')
})