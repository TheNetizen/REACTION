
let controller={}

controller.login = async (req, res) => {
    console.log("ok")
    res.send({message:"logged In"})
}


module.exports=controller