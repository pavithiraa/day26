import React, { useState,useEffect } from 'react';
import axios from './axios';
function Row({title,fetchURL}){
    const [moives,setMoives]=useState([])
    useEffect(()=>{
        async function fetchData(){
          
        const request =await axios.get(fetchURL);
           
            setMoives(request.data.results);
            return request;
        }
        fetchData();
    },[])
    return(
        <div>
            <h2>{title}</h2>

        </div>
    )
}
export default Row;