//register form->concept used custom hook 
import React from 'react'
import UseForm from './useForm'
import validate from './ValidateInfo'


const Register=()=>{
    const {handleChange,values,handleSubmit,errors}=UseForm(validate)
        return(<React.Fragment>
            <div className="container" style={{height:"85vh"}}>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card shadow pd-3 rounded" style={{padding:"1vh 4vh 0vh 4vh",margin:"1vh",height:'82vh'}}>
                        <h1 style={{textAlign:"center"}}><u style={{textDecorationColor:"red",textAlign:"center"}}>Register</u></h1>
                        <form onSubmit={handleSubmit} >
                        <div className="form-group" style={{margin:'0.2vh'}}>
                            <label >Name</label>
                        <input className="form-control" type="text" id="name" name="name" placeholder="Enter the Name" style={{marginTop:"0.2vh"}} value={values.name} onChange={handleChange}/>
                        <p style={{fontSize:"12px",color:'red',marginBottom:'-0.55vh'}}>{errors.name}</p>
                        </div>
                        <div className="form-group" style={{margin:'0.2vh'}}>
                            <label >Email Id</label>
                            <input className="form-control" type="text" id="email" name="email" placeholder="Enter the Email Id" style={{marginTop:"0.2vh"}} value={values.email} onChange={handleChange}/>
                            <p style={{fontSize:"12px",color:'red',marginBottom:'-0.55vh'}}>{errors.email}</p>
                        </div>
                        <div className="form-group" style={{margin:'0.2vh'}}>
                            <label >Contact</label>
                            <input className="form-control" type="number" id="phno" name="phno" placeholder="Enter the Phone Number" style={{marginTop:"0.2vh"}} value={values.phno} onChange={handleChange}/>
                            <p style={{fontSize:"12px",color:'red',marginBottom:'-0.55vh'}}>{errors.phno}</p>
                        </div>
                        <div className="form-group" style={{margin:'0.2vh'}}>
                            <label >Password</label>
                            <input className="form-control" type="password" id="password" name="password" placeholder="Enter the Password" style={{marginTop:"0.2vh"}} value={values.password} onChange={handleChange}/>
                            <p style={{fontSize:"12px",color:'red',marginBottom:'-0.55vh'}}>{errors.password}</p>
                        </div>
                        <div className="form-group" style={{margin:'0.2vh'}}>
                            <label >Confirm Password</label>
                            <input className="form-control" type="password" id="cnfpassword" name="cnfpassword" placeholder="Confirm Password" style={{marginTop:"0.2vh"}} value={values.cnfpassword} onChange={handleChange}/>
                            <p style={{fontSize:"12px",color:'red',marginBottom:'-0.55vh'}}>{errors.cnfpassword}</p>
                        </div>
                        <div className="form-group" style={{margin:'0.2vh',marginTop:"2vh"}}>
                            <button className="form-control btn btn-primary" type="submit">Register</button>
                        </div>
                        <span style={{color:"red"}}><b>{values.message}</b></span>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
         
        </React.Fragment>)
    }


export default Register