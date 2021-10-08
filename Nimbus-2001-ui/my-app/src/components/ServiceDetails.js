
import React, {useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react';
import Servdetails from "../servdetails.jpg"

import './ServiceDetails.css'
import BookingForm from './BookingForm'

function ServiceDetails(props) {
    const childRef = useRef();
    const servData=JSON.parse(sessionStorage.getItem("serv"))
   const handleClick=()=>{
    
   }
   
  
    if(servData){
       
        return (

            <div className="container-fluid">
                <div className="row" style={{marginLeft:'10vh',marginTop:'5vh'}}>
                    <div className="col-8 "  >
                    <h1 style={{color:'red'}}>{servData.serviceName}</h1>
                    <p style={{fontSize:'2.5vh'}}>{servData.description}</p>
                    <h3><u style={{textDecorationColor:"red"}}>Parcel Size</u></h3>
                    <p style={{fontSize:'2.5vh'}}>{servData.parcelSize}</p>
                    <h3><u style={{textDecorationColor:"red"}}>Parcel Charges</u></h3>
                    <p style={{fontSize:'2.5vh'}}>{servData.parcelCharges}</p>
                  
                    <ul className="faq-list">
                        <li><span> When will Nimbus-2001 deliver our parcel?</span></li>
                        <li><span> When will Nimbus-2001 deliver our parcel?</span></li>
                        <li><span> When will Nimbus-2001 deliver our parcel?</span></li>
                        <li><span> When will Nimbus-2001 deliver our parcel?</span></li>
                        <li><span> When will Nimbus-2001 deliver our parcel?</span></li>
                    
                    </ul>
                    
                          
                             
                     <button className="btn btn-primary btn form-control" style={{marginTop:'60px'}} onClick={() => { childRef.current.handleService() }} >Book a Service</button>
                
                    
    
                    </div>
                    <div className="col-3">
                        <img src={Servdetails} alt="serviceDetails" style={{margin:'1vh',padding:'1vh',height:'20vh',width:'95%'}}/>
                        <div className="card shadow rounded" style={{padding:'1vh',height:'56vh'}}>
                          <h3 style={{textAlign:'center'}}><u style={{textDecorationColor:'red'}}>Get a Quote</u></h3>
                          <form>
                          <label>From<span style={{color:"red"}}>*</span>(collection)</label>
                          <input type='text' className="form-control" style={{width:'100%'}} placeholder="Enter your pickup location."/>
                          <label>To<span style={{color:"red"}}>*</span>(Delivery)</label>
                          <input type='text' className="form-control" style={{width:'100%'}}placeholder="Enter your delivery location." />
                          <label>Weight<span style={{color:"red"}}>*</span></label>
                          <input type='text' className="form-control" style={{width:'100%'}} placeholder="Enter weight of consignment(in kg)." />
                          <label>Enter Parcel Dimension<span style={{color:"red"}}>*</span></label>
                          <div className="input-group">
                          <input type='text' className="form-control" style={{width:'30%',margin:'0.25vh'}} placeholder="length" />
                          <input type='text' className="form-control" style={{width:'30%',margin:'0.25vh'}} placeholder="length" />
                          <input type='text' className="form-control" style={{width:'30%',margin:'0.25vh'}} placeholder="length" />
                           </div> 
                             
                          <button className=" btn btn-danger" style={{marginTop:'1vh'}} >submit</button>
                          
                          </form>
                        </div>
                    </div>

                </div>
             <BookingForm ref={childRef}/>
               
            </div>
            
        )
    }
    return(<div>Loading...</div>)
   
    
}

export default ServiceDetails
