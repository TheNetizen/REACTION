const dbLayer=require('../Model/DBLayer')
let controller={}

controller.login = async (req, res) => {
    email=req.body.data.email
    password=req.body.data.password
    let data=await dbLayer.login(email,password)
    try{
    if(data){
        res.status(200).send({
            status: "success",
            data: data
    })  
    }else{
        throw new Error("Invalid Credentials!!!")
    }
}catch(err){
        res.status(200).send({
            status:"error",
            data:{
                "message":err.message
            }
        })
    
}

}
controller.register= async(req,res)=>{ 
    try{
        const record=req.body.data
        let data=await dbLayer.register(record)
        if(data){
            console.log("registered")
            res.status(200).send({
                status: "success",
                data: data
        })
    
        }else{
            throw new Error("Some Error occured, Please try Again!!!")
        }
    }catch(err){
            
            res.status(200).json({
                status: "error",
                data: {
                    "message": err.message
                }
            })
        
        
    }
  
}


module.exports=controller