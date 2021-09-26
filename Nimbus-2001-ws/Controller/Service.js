
let controller={}

controller.login = async (req, res) => {
    try {
        if(req.body.email && req.body.password){
            res.send("Login Successful!")
        }
        // if (validator.validatePassword(req.body.Password)) {
        //     const LoginUser =
        //         await model.usersCollection.find({ "UserId": req.body.UserId, "Password": req.body.Password });

        //     if (LoginUser.length > 0) {
        //         res.cookie("Name", LoginUser[0]["Name"])
        //         res.status(201)
        //         res.send("Logged in successfully")
        //     } else {
        //         res.status(400).json({
        //             status: 400,
        //             data: {
        //                 "message": "Incorrect UserId or Password"
        //             }
        //         })
        //     }
        // } else if (!validator.validatePassword(req.body.Password)) {
        //     res.status(400).json({
        //         status: "error",
        //         data: {
        //             "message": "Enter a valid password with atleast 8 and not more than 12 characters"
        //         }
        //     })
        // }

    } catch (err) {
        res.status(404).json({
            status: "error",
            message: err.message

        })
    }
}


module.exports=controller