const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    console.log(req.body);

    try{
        const check=await collection.findOne({email,password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/register",async(req,res)=>{
    console.log(req.body);
    const{email,password}=req.body

    const data=new collection({
        email:email,
        password:password

    })
console.log(data);
    try{
        const check=await collection.find({email:email})

        if(check.length>0){
            res.json("exist")
        }
        else{
            await data.save();
            res.json("user saved");
        }

    }
    catch(e){
        console.log(e);
        res.json("fail")
    }

})

// app.post("/placeorder",(req,res)=>{
//     const {order_id,}
// })


app.listen(8000,()=>{
    console.log("port connected");
})
