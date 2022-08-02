//import area
console.log('Hello world')
//const samthing=require(samelibrary)

const express=require('express');
const app=express();
const mongoose=require('mongoose')
require('dotenv').config();
app.use(express.json());

async function main(){
    return await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.4gb2s.mongodb.net/?retryWrites=true&w=majority`)
}
main().then((d)=>{
    console.log('connected')
 app.post('/data',(req,res)=>{
     const Stu  = mongoose.model('Stus', { name: String });
    const friend=new Stu({name:req.body.name})
    console.log(req.body)
    friend.save().then(()=>{
        res.status(200).json({msg:'its okk'})
    })
    
 })





}).catch((e)=>{
    console.log('disconnected')
})
const port=process.env.port
app.listen(port,()=>{
    console.log(`this port is running on port on port${port}`)
})