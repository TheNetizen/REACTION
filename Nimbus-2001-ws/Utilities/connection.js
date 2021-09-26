const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/NimbusDB',{
    useNewUrlParser:true,
    useFindandModify:false,
    useCreateIndex:false,
    useUnifiedTopology:true
}).then(()=>console.log('DB connection successful!'))

var users = mongoose.Schema({
    
    Name:{
        type:String,                  
        },
    EmailId:{
        type:String,
        },
    PhoneNo:{
        type:Number,
        },
    Password:{
        type:String,
        },
    default:[],
    })

let userSchema = mongoose.Schema(users,{collection:'users',timestamps:true})

exports.usersCollection=
mongoose.modelNames().indexOf('usersCollection')=== -1?
mongoose.model('usersCollection',users):mongoose.connection.model('usersCollection',users)