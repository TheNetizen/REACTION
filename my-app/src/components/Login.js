import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import ImgLog from '../login07.jpg'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


class Login extends React.Component{
    // constructor(){
    //     super()
    //     this.state({name:'',password:''})
    //     this.nameRef=React.createRef()
    //     this.pwdRef=React.createRef()

    // }
   handleCreate=(e)=>{
     this.props.history.replace('/register')
   }
   render(){
     
        return(
       
        <React.Fragment>
            <div className="container" style={{height:"85vh"}}>
                <div className="row">
                    
                     <div className="col-10 offset-1">
                     <div className="card shadow p-3 mb-5  rounded" style={{height:"70vh",margin:'5vh'}} >
                     <div className="row">
                     <div className="col-7" style={{textAlign:'center'}}> 
                     <img src={ImgLog} alt="Login" style={{height:'65vh',width:"75vh"}} />
                     </div>
                     <div className="col-5">
                   
                        <h1 style={{textAlign:"center",marginTop:"15vh"}}><u style={{textDecorationColor:"red",textAlign:"center"}}>Login</u></h1>
                        <form>
                            <div className="form-group" style={{textAlign:'center',margin:'2vh'}}>
                            <input className="form-control" type="text" id="email" name="email" placeholder="user email" /><FaUser style={{position:"absolute",marginTop:"-4vh",marginLeft:"18vh"}}/>
                            </div>
                            <div className="form-group" style={{textAlign:'center',margin:'2vh'}}>
                            <input className="form-control" type="password" id="password" name="password" placeholder="password"/><FaEye style={{position:"absolute",marginTop:"-4vh",marginLeft:"18vh"}}/>
                            </div>
                            <div className="form-group" style={{textAlign:'center',margin:'2vh'}}>
                            <button className='btn btn-primary ' style={{paddingLeft:'3vh',paddingRight:'3vh'}}>Login</button>
                            </div>
                            <div className="form-group" style={{textAlign:'center',margin:'4vh'}}>
                            <p>Dont have an account<button className='btn btn-link buttonCreate btn-without-border' style={{textDecoration:'none',marginTop:'-0.6vh',marginLeft:'-1vh'}} onClick={this.handleCreate}>Create Now</button></p>
                            </div>

                            

                            
                        </form>
                   
                    </div>
                           </div>
                     </div>
                    
                     </div>
                    
                </div>
            </div>
           
        
        </React.Fragment>
        
       
        )
       
   }
}

export default Login