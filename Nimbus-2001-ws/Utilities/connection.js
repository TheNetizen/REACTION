const mongoose=require('mongoose')
let connection={}
const url='mongodb://localhost:27017/Nimbus2001DB'
// mongoose.connect('mongodb://localhost:27017/NimbusDB',{
//     useNewUrlParser:true,
//     useFindandModify:false,
//     useCreateIndex:false,
//     useUnifiedTopology:true
// }).then(()=>console.log('DB connection successful!'))

var users = mongoose.Schema({
    
    name:{
        type:String, required: true                
        },
    email:{
        type:String,required: true,unique:true
        },
    phno:{
        type:Number,required: true
        },
    password:{
        type:String,
        minlength: 6,
        required: true 
        },
    default:[],
    })
try{

}catch{}
let userSchema = mongoose.Schema(users,{collection:'users',timestamps:true})

connection.usersCollection=async()=>{
    try{
        return  (await mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true })).model("users", userSchema)
    }catch(err){
        console.log(err)
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports=connection