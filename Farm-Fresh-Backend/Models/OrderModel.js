const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User=require("./UserModel");
const orderSchema = new Schema({
amount:{
    type:Number,
    required:true,
},
paymentStatus:{
    type:Boolean,
    required:true,
    default:false,
},
userId:{
    type:Schema.ObjectId,
    ref:"User",
},
address:{
    type:String,
},
rz_order:{
    type:String,
    required:true,
}
})

module.exports=mongoose.model("Order",orderSchema);