import React from 'react'


function ServiceDetails(props) {
    const servData=props.servdata
    console.log(servData)
    if(servData){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                    <h1 style={{color:'red'}}>{servData.serviceName}</h1>
                    <p>{servData.description}</p>
                    <h3><u style={{textDecorationColor:"red"}}>Parcel Size</u></h3>
                    <p>{servData.parcelSize}</p>
                    <h3><u style={{textDecorationColor:"red"}}>Parcel Charges</u></h3>
                    <p>{servData.parcelCharges}</p>
    
    
                    </div>
                </div>
               
            </div>
        )
    }
    return(<div>Loading...</div>)
   
    
}

export default ServiceDetails
