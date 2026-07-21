import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { addConnection } from "../utils/connectionSlice";

const Connections =()=>{

    const connection = useSelector((store)=>store.connection);
    const dispatch= useDispatch();
    
    const fetchConnection = async ()=>{
    try{
           const res = await axios.get(BASE_URL+"/user/connection",
                {withCredentials:true})
                console.log(res.data.data);
                dispatch(addConnection(res.data.data))
        }
        
    catch(err){
        console.log(err);
    }
    }
    useEffect(()=>{
        fetchConnection();
    },[]);
    //CONNECTION DAA DOESNOT EXIST JUST RETRN
    if(!connection)return;
    if(connection.length === 0)return<h1>No onnections found</h1>
    
    return(
        <div className="text-center my-10">
            <h1 className="text-bold text-4xl text-black">Connections</h1>

        {connection.map((connection)=>{
            const {_id,firstName,lastName,photourl,age,gender,about}= connection;
            return(
            <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
              <div>
                  <img alt="photo"
                  className="w-20 h-20 rounded-full"
                  src={photourl}></img>
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">{firstName+" "+lastName}</h2>
                {age && gender && <p>{age+","+gender}</p>}
                <p>{about}</p>
              </div>


            
            </div>
        )})}
        </div>
    )
}
export default Connections;