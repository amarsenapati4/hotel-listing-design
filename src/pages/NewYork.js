import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import jsonFile from './propertydata.json';


const NewYork = () => {
    const[carddata,setCarddata]=useState([]);

    useEffect( ()=>{
        getAllProducts();
    },[]);
    const getAllProducts = async () => {
        try {
          setCarddata(jsonFile[1].property);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className='w-full h-fit space-y-4'>
    <div className='container max-w-[960px] mx-auto my-4  p-2 flex justify-center'>
  <h1 className='font-bold'>New York</h1>
        
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

export default NewYork