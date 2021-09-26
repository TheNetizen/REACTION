import React from 'react'

class Register extends React.Component{
   
    render(){
        return(<React.Fragment>
            <div className="container" style={{height:"85vh"}}>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card shadow pd-3 rounded" style={{padding:"2vh",margin:"3vh",height:'78vh'}}>
                        <h1 style={{textAlign:"center"}}><u style={{textDecorationColor:"red",textAlign:"center"}}>Register</u></h1>
                        <form>
                        <div className="form-group" style={{margin:'1vh'}}>
                            <label >Name</label>
                            <input className="form-control" type="text" id="name" name="name" placeholder="Enter the Name" style={{marginTop:"0.5vh"}}/>
                        </div>
                        <div className="form-group" style={{margin:'1vh'}}>
                            <label >Email Id</label>
                            <input className="form-control" type="text" id="email" name="email" placeholder="Enter the Email Id" style={{marginTop:"0.5vh"}}/>
                        </div>
                        <div className="form-group" style={{margin:'1vh'}}>
                            <label >Contact</label>
                            <input className="form-control" type="number" id="phno" name="phno" placeholder="Enter the Phone Number" style={{marginTop:"0.5vh"}}/>
                        </div>
                        <div className="form-group" style={{margin:'1vh'}}>
                            <label >Password</label>
                            <input className="form-control" type="password" id="password" name="password" placeholder="Enter the Password" style={{marginTop:"0.5vh"}}/>
                        </div>
                        <div className="form-group" style={{margin:'1vh'}}>
                            <label >Confirm Password</label>
                            <input className="form-control" type="number" id="cnfpassword" name="cnfpassword" placeholder="Confirm Password" style={{marginTop:"0.5vh"}}/>
                        </div>
                        <div className="form-group" style={{margin:'1vh',marginTop:"2vh"}}>
                            <button className="form-control btn btn-primary">Register</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
         
        </React.Fragment>)
    }
}

export default Register