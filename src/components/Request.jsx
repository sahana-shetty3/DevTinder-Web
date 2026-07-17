import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Request = ()=>{
    const request=useSelector((store)=>store.request)
    const dispatch=useDispatch();

    const [showButtons,setShowButtons]=useState("")

    const reviewRequest=async(status,_id)=>{
    try{

        const res= axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},
        {withCredentials:true})

        }catch(err){

        }
    }

    const fetchRequests=async()=>{
        try{
            const res = await axios.get(BASE_URL+"/user/request/received",
                {withCredentials:true})

           dispatch(addRequests(res.data.data))     
        }catch(err){

        }
    }

    useEffect(()=>{
        fetchRequests()
    },[])
   if(!request)return;
    if(request.length === 0)return<h1>No request found</h1>
    
    return(
        <div className="text-center my-10">
            <h1 className="text-bold text-4xl text-black">Connections  Request</h1>

        {request.map((request)=>{
            const {_id,fromUserId}=request;

            if(!fromUserId)return null;
            const {firstName,lastName,photourl,age,gender,about}= fromUserId;
            
            return(
            <div key={_id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto">
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
              <div className=" mx-2 flex justify-center">
                <button className="btn btn-dash btn-primary mx-2" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
                <button className="btn btn-dash btn-secondary mx-2" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
              </div>


            
            </div>
        )})}
        </div>
    )
}

export default Request;