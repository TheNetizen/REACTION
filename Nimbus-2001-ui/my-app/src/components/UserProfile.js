import React,{useState} from 'react'
import { useHistory } from "react-router-dom";

const UserProfile=(props)=> {
    const [data,setData]=useState(props.data)
     
     const name=localStorage.getItem("name")
     const email=localStorage.getItem('email')
     const phno=localStorage.getItem('phno')
     const history=useHistory()

     const handleClick=()=>{
         localStorage.clear()
         props.handleLogOut()
         history.push('/home')
     }
     return(<React.Fragment>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-10 offset-1">
                     <div className="card shadow rounded" style={{ height:'35vh', margin:'2vh',padding:'4vh', background:'linear-gradient(to right, #f1d8f5b9, #dceff3d5)'}}>
                         <h3 style={{textAlign:'center'}}><u style={{textDecorationColor:'red'}}>Profile Information</u></h3>
                         <div style={{marginDown:'5vh'}}><b style={{marginRight:'18.5vh',marginLeft:'55vh'}}>Name</b> : <b style={{margin:'15vh'}}>{name}</b></div>
                         <div style={{marginDown:'5vh'}}><b style={{marginRight:'19vh',marginLeft:'55vh'}}>Email</b> : <b style={{margin:'15vh'}}>{email}</b></div>
                         <div><b style={{marginRight:'7.2vh',marginLeft:'55vh'}}>Phone Number</b> : <b style={{margin:'15vh'}}>{phno}</b></div>
                         <div style={{margin:'4vh',textAlign:'center'}}><button className="btn btn-warning btn-block" onClick={handleClick}>Log Out</button></div>
                     </div>
                 </div>
             </div>
         </div>
     </React.Fragment>)
 }


export default UserProfile