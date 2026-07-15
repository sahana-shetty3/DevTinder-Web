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
    if(!connection)return;
    if(connection.length === 0)return<h1>No onnections found</h1>
    useEffect(()=>{
        fetchConnection();
    },[]);
    return(
        <div className="justify-center my-10">
            <h1 className="text-bold text-3xl text-purple-300">Connections</h1>

        {connection.map((connection)=>{
            const {firstName,lastName,photourl,age,gender,about}= connection;
            return(
            <div>
                <img alt="photo"className="w-20 h-20"src={photourl}></img>
                <h2>{firstName+" "+lastName}</h2>
                <p>{about}</p>
            
            </div>
        )})}
        </div>
    )
}
export default Connections;