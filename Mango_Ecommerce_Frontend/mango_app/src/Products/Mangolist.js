
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom';
import MangoArraylist from "./MangoArraylist";
import Header from "../pages/header";
import Customerheader from "../pages/Customerheader";



export default  function Mangolist()
{
    let [arr,setArr]=useState([]);
    
      useEffect(()=>{
        axios.get("http://localhost:8080/mangoinfo/getAllvarieties",{})
                .then(Response=>{
                    if(Response.status===200)
                    {
                      setArr(Response.data);
                      console.log(Response.data)
                    }else{
                        alert("Data Not Found")
                    }
                })
                .catch(e=>{
                  console.log(e)
                  alert("nothing isn")
                })       
    },[])


    return(
        <div>
    
      <Customerheader></Customerheader>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
                  {arr.map((li,ind)=>{
                    return(
                      <MangoArraylist key={ind}
                      id={li.mangoid}
                      name={li.variety}
                      desc={li.description}
                      price={li.priceperdozen}
                      fid={li.farmer}
                      ></MangoArraylist>
                    );
                  })}
                  
    </div>



    )

}