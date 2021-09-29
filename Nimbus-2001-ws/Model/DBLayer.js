const connection=require('../Utilities/connection')
dbLayer={}

dbLayer.login=async(email,password)=>{
    collection=await connection.usersCollection();
    console.log("connected to DB")
    let response = await collection.findOne({"email":email,"password":password});
    console.log(response)
    if(response!=null){
        return response
    }else{
        return false
    }
}
dbLayer.register=async(data)=>{
    try{
        collection=await connection.usersCollection();
        console.log("connected to DB")
        let response = await collection.create(data);
        console.log(response)
        if(response!=null){
            return response
        }else{
            return false
        }
    }catch(err){
       console.log(err.name)
        if(err.name === 'MongoServerError'){
            throw new Error("Email Id Already Exists!")
        }else{
            throw new Error("SomeThing Broke!")
        }
        
    }
   
}




module.exports=dbLayer