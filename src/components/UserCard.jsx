import axios from "axios";
import { BASE_URL } from "../utils/constants";

const UserCard =({user})=>{
  const {firstName,lastName,photourl,age,gender,about}=user;
  
  const handleRequest = async ()=>{
    try{
      
      const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+useId,{},
        {withCredentials:true});

      

    }catch(err){

    }
  }
    return(
    <div className="card bg-base-400 w-96 shadow-sm">
  <figure>
    <img
      src={user?.photourl || "https://placeholder.com/150"} 
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + ","+gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary color">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>)
}

export default UserCard;