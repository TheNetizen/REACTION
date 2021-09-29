export default function ValidateInfo(values){
   let errors={}
   if(!values.name){
       errors.name="Name Required!"
   }
   if(!values.email){
    errors.email="Email Required!"
}else if(!(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/i).test(values.email)){
    errors.email="Email address is Invalid!"
}
if(!values.phno){
    errors.phno="Phone Number Required!"
}else if(values.phno.length<10){
    errors.phno="Phone Number is Invalid!"
}
if(!values.password){
    errors.password="Password Required!"
}else if((values.password.length<6)){
    errors.password="Password should contain min 6 characters!"
}
if(!values.cnfpassword){
    errors.cnfpassword="Confirm Password Required!"
}else if(values.password!==values.cnfpassword){
    errors.cnfpassword="Confirm Password and Password should match!"
}
 return errors
}
