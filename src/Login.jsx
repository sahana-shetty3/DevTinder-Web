import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login =()=>{
    const [emailId,setEmailId]= useState("shama@gmail.com");
    const [password,setPassword]=useState("Shama@123");

    const dispatch =useDispatch();

    const handleLogin= async ()=>{
    try{
        const res= await axios.post("http://localhost:3/login",{
            emailId,
            password,
        },{withCredentials:true}
    );
    console.log(res.data);
    dispatch(addUser(res.data));
    }catch(err){
        console.log(err);
    };


    }

    return(
    <div className=" flex justify-center my-10 ">
     <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
       <h2 className="card-title justify-center">Login</h2>
        <div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend "> Email Id</legend>
                <input type="text" value={emailId} className="input" onChange={(e)=> setEmailId(e.target.value)} />
            </fieldset>
        </div>
        <div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend "> Password </legend>
                <input type="text" value={password} className="input" onChange={(e)=>setPassword(e.target.value)}/>
            </fieldset>  
        </div>
        
        <div className="card-actions justify-center">
         <button className="btn btn-primary"onClick={handleLogin} >Login</button>
       </div>
      </div>
     </div>
    </div>)
    
};
export default Login;