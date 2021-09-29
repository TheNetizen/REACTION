//custom hook for form validation
import { useState} from "react";
import axios from 'axios'

const UseForm=(validate)=>{
const [values,setValues]=useState({
    name:'',
    email:'',
    phno:'',
    password:'',
    cnfpassword:'',
    message:''
})

const [errors,setErrors]=useState({})
//to handle changes in form
const handleChange=e=>{
    const {name,value}=e.target
    setValues({
        ...values,
        [name]: value
        //[e.target.name]=e.target.value
    }
    )
}
const disp=result=>{
    console.log(result.data)
    if (result.data.status==="error"){
        setValues({
          ...values,
          message:result.data.data.message})
    }else{
        disp(values.name)
    }
    alert('Hey'+values.name+', Welcome to Nimbus-2001! Enjoy the Services :) ')
}
const handleSubmit=e=>{
    e.preventDefault()
    setValues({...values,message:""})
    setErrors(validate(values))
    const data={
        name:values.name,
        email:values.email,
        phno:values.phno,
        password:values.password
        
    }
    
    if(!Object.keys(errors).length){
        
        axios.post('http://localhost:4000/register',{data}).then(
            result=>{
               disp(result)
            }
             
            ).catch(
                error=>console.log(error)
             )
    }
    
   
}
return {handleChange,values,handleSubmit,errors}
}

export default UseForm