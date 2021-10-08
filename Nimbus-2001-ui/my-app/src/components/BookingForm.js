import React, {useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react';
import Modal from 'react-modal'

const BookingForm = forwardRef((props,ref) => {
    const [modalisOpen,setModalisOpen]=useState(false)
    useImperativeHandle(
        ref,
        () => ({
            handleService(){
                setModalisOpen(true)
               }
        }),
    )
   
    const handleCloseModal=(e)=>{
        setModalisOpen(false)
       }
       const handleSubmit=(e)=>{
           e.prevenDefault()
           console.log("submitted")
           alert("Your Booking is Confirmed !!!")
       }
      
        
    return (
        <div>
           
           <Modal  isOpen={modalisOpen} onRequestClose={handleCloseModal} style={{width:"60%"}}  ariaHideApp={false}>
                    <h5><u style={{textDecorationColor:'red'}}>Booking Form</u></h5>
                    <form onSubmit={handleSubmit}>
                     <div className="form-group">
                         <label>Sender's Name</label>
                         <input type="text" className="form-control"/>
                     </div>
                     <div className="form-group">
                         <label>Reciever's Name</label>
                         <input type="text" className="form-control"/>
                     </div>
                     <div className="form-group">
                         <label>Sender's Phone No.</label>
                         <input type="number" className="form-control"/>
                     </div>
                     <div className="form-group">
                         <label>Reciever's Phone No.</label>
                         <input type="number" className="form-control"/>
                     </div>
                     <div className="form-group">
                         <label>Choose Date to pick your package.</label>
                         <input type="date" className="form-control"/>
                     </div>
                     <div className="row">
                         <div className="col-6">
                             Sender's Address
                             <div className="form-group">
                         
                         <input type="text" className="form-control" placeholder='Flat No.'/>
                         <input type="text" className="form-control" placeholder='Lane'/>
                         <input type="text" className="form-control" placeholder='Locality'/>
                         <input type="number" className="form-control" placeholder='PinCode'/>
                         <select className='form-control'><option>--select State--</option></select>

                          </div>
                         </div>
                         <div className="col-6">
                             Reciever's Address
                             <div className="form-group">
                         
                         <input type="text" className="form-control" placeholder='Flat No.'/>
                         <input type="text" className="form-control" placeholder='Lane'/>
                         <input type="text" className="form-control" placeholder='Locality'/>
                         <input type="number" className="form-control" placeholder='PinCode'/>
                         <select className='form-control'><option>--select State--</option></select>
                         
                          </div>
                         </div>

                     </div>
                     <div className="form-group"><button className="btn btn-sm btn-primary" type="submit" onClick={handleCloseModal} style={{marginTop:'20px',float:'right'}}>Submit</button></div>
                     
                    </form>
                    
                    
                </Modal> 
        </div>
    )
})

export default BookingForm
