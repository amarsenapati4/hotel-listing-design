import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import jsonFile from './propertydata.json';


const Mumbai = () => {
    const[carddata,setCarddata]=useState([]);

    useEffect( ()=>{
        getAllProducts();
    },[]);
    const getAllProducts = async () => {
        try {
            console.log("Mumbai data",jsonFile[0].property);
          setCarddata(jsonFile[0].property);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className='w-full h-fit space-y-4'>
    <div className='container max-w-[960px] mx-auto my-4  p-2 flex justify-center'>
  <h1 className='font-bold'>Mumbai</h1>
        
        </div>
        <div className='grid grid-cols-3 gap-6 container max-w-[960px] mx-auto'>
         {/* <Card/> */}
         {
            carddata.map((p)=>(
          
                <Card p={p}/>
              
            ))
         }
        </div>
    </div>
  )
}

export default Mumbai