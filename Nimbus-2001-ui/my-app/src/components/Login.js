//This is login form-> concept used:session storage, controlled form, routing, loading component using history
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import ImgLog from '../login07.jpg'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Login =(props)=>{
        
        console.log("props",props.loginStatus)
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const[message,setMessage]=useState("")
        // eslint-disable-next-line
        
        const history=useHistory()
       
   
  const handleCreate=(e)=>{
     history.push('/register')
   }
   
   const disp=(result)=>{
    
       if(result.data.status==="success"){
        
        localStorage.setItem('email',email)
        props.handleComp()
        history.push('/userProfile')
        
       }else{
           setMessage(result.data.data.message)
       }
   }
   const handleLogin=(e)=>{
       e.preventDefault()
       
       if(email==='' || password===''){
             setMessage("All fields are Mandatory!!!")
       }
       else{
        setMessage("")  
        const data={
            email:email,
            password:password
        }
        
        axios.post('http://localhost:4000/login',{data}).then(
            result=>{
             disp(result)
            }
             
            ).catch(
                error=>console.log(error)
             )
       }
      
       
   }
  
     
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
                            <input className="form-control" type="text" id="email" name="email" placeholder="user email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><FaUser style={{position:"absolute",marginTop:"-4vh",marginLeft:"18vh"}}/>
                            </div>
                            <div className="form-group" style={{textAlign:'center',margin:'2vh'}}>
                            <input className="form-control" type="password" id="password" name="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><FaEye style={{position:"absolute",marginTop:"-4vh",marginLeft:"18vh"}}/>
                            </div>
                            <div className="form-group" style={{textAlign:'center',margin:'2vh'}}>
                            <button className='btn btn-primary ' style={{paddingLeft:'3vh',paddingRight:'3vh'}} onClick={handleLogin}>Login</button>
                            </div>
                            <div className="form-group text-danger" style={{margin:'2vh',textAlign:'center'}}>
                                <b >{message}</b>
                            </div>
                            <div className="form-group" style={{textAlign:'center',margin:'4vh'}}>
                            <p>Dont have an account<button className='btn btn-link buttonCreate btn-without-border' style={{textDecoration:'none',marginTop:'-0.6vh',marginLeft:'-1vh'}} onClick={handleCreate}>Create Now</button></p>
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


export default Login