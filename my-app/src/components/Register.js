import React from 'react'

class Register extends React.Component{
   
    render(){
        return(<React.Fragment>
            <div className="container" style={{height:"85vh"}}>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card" style={{padding:"3vh",margin:"5vh"}}>
                        <h1 style={{textAlign:"center"}}><u style={{textDecorationColor:"red",textAlign:"center"}}>Login</u></h1>
                    </div>
                    </div>
                </div>
            </div>
         
        </React.Fragment>)
    }
}

export default Register