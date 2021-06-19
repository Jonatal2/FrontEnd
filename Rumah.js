const express = require('express');
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json());
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Mouse',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const stipeX = new mongoose.Schema({
    dekripsi:String,
})
const perlihatkan = mongoose.model('Pen',stipeX);

app.get('/',async(req,res)=>{
    res.sendFile('Tugas.html',{root:__dirname})
})
app.post('/Rumah',async(req, res)=>{
    const mpl = new perlihatkan(req.body);
    try{
        mpl.save();
        console.log(mpl)
    }catch(error){
        res.status(500).send(error)
    }
    await perlihatkan.find({},(err,data)=>{
        res.send(data);
    }).exec();
})
app.listen(3000,console.log('running'))