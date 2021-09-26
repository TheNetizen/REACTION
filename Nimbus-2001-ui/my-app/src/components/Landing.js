import React from 'react'
import './Landing.css'

import Img from '../moveNpack.gif'
import ImgTO from '../takingorder.jpg'
import ImgGP from '../gettingparcel.jpg'
import ImgLP from '../loadingParcel.jpg'
import ImgD from '../delivering.jpg'
class Landing extends React.Component{
    render(){
        return(<React.Fragment>
             <div className="card">
<div className="row" >
        <div className="col-5 " style={{margin:"10px",marginLeft:"130px"}}>
        <h3 style={{fontFamily:'fantasy',fontStyle:'initial',margin:"10px"}}><u style={{textDecorationColor:'red'}}>Nimbus-2001</u></h3>
<p >With Nimbuss 2001, we aim to make entire package delivery experience straightforward-providing online tools for shipping, monitoring and tracking, lending our expertise in costumer clearance and keeping abreast of all the latest rules and regulations.</p>
<button className="btn btn-lg btn-danger">Want to book a service?</button>
        </div>
        <div className="col-5"><img src={Img} alt="movers and packers"  style={{paddingBottom:"-100px"}}></img></div>
</div>

</div>
<div className="card gradcard2">
<div className="row" >
        <div className="col-2 offset-2">
        <div className="card gradminicard shadow p-3 mb-5  rounded" style={{margin:"2vh",height:"35vh",alignItems:"center"}}><img src={ImgTO} alt="Taking Order" /><b style={{textAlign:"center",fontSize:"2vh"}}>TAKING THE ORDER</b></div>
        </div>
        <div className="col-2">
        <div className="card gradminicard shadow p-3 mb-5  rounded" style={{margin:"2vh",height:"35vh",alignItems:"center"}}><img src={ImgGP} alt="Taking Order"/><b style={{textAlign:"center",fontSize:"2vh"}}>GETTING THE PARCEL</b></div>
        </div>
        <div className="col-2">
        <div className="card gradminicard shadow p-3 mb-5  rounded" style={{margin:"2vh",height:"35vh",alignItems:"center"}}><img src={ImgLP} alt="Taking Order"/><b style={{textAlign:"center",fontSize:"2vh"}}>LOADING PACKAGE</b></div>
        </div>
        <div className="col-2">
         <div className="card gradminicard shadow p-3 mb-5  rounded" style={{margin:"2vh",height:"35vh",alignItems:"center"}}><img src={ImgD} alt="Taking Order"/><b style={{textAlign:"center",fontSize:"2vh"}}>DELIVER TO DOOR</b></div>
        </div>
</div>
</div>

        </React.Fragment>

        )
    }
}

export default Landing


