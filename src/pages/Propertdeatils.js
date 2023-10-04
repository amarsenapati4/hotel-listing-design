import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import jsonFile from './propertydata.json';
import Layout from '../Layout/Layout';
import {BsHourglassSplit} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Propertdeatils = () => {
    const[carddata,setCarddata]=useState([]);
    const [clickedItem, setClickedItem] = useState(jsonFile[3].property);
    // eslint-disable-next-line no-unused-vars
    const[currentpage,setCurrentpage]=useState(1);
    const[postperpage,setPostperpage]=useState(6);
    const [activeCity, setActiveCity] = useState(jsonFile[3].city);

   

    const handleItemClick = (data,city) => {
        setClickedItem(data);
        setActiveCity(city);
        // You can perform any action with itemText here
      };
    useEffect( ()=>{
        getAllProducts();
    },[]);
    const getAllProducts = async () => {
        try {
            console.log("json data fuck",jsonFile[3].city);
          setCarddata(jsonFile);
        } catch (error) {
          console.log(error);
        }
      };

      const lastPostIndex=currentpage * postperpage;
      const firstPageIndex=lastPostIndex - postperpage;
      const currentPost=clickedItem.slice(firstPageIndex,lastPostIndex);
      console.log("Cuurent post",currentPost);
      const handleShowMore = () => {

      setPostperpage(postperpage+3);
      };

    return (

            <div className='w-full h-fit space-y-4'>
            <div className='container max-w-[960px] mx-auto my-4  p-2 '>
                  <ul className='flex space-x-4'>
                    {
                        carddata.map((p,index)=>(
                            <li  className={`font-semibold border p-2 rounded-full px-4 cursor-pointer ${
                              p.city === activeCity ? 'bg-blue-700 text-white' : 'bg-[#ebebfb]'
                            }`} key={index} onClick={()=>{ handleItemClick(p.property,p.city); console.log('Clicked:', p.property); }}>{p.city}</li>
                        ))
                    }
                  </ul>
                
                </div>
                <div className='grid grid-cols-3 gap-6 container max-w-[960px] mx-auto'>
                 {/* <Card/> */}
                 {
                    currentPost.map((p,index)=>(
                      <Link key={index} to={`/property/${activeCity}`}>
                        <Card p={p}/>
                        </Link>
                    ))
                 }
                </div>
                <div className='w-full max-w-[960px] mx-auto  h-12  mb-2 rounded-full items-center  my-6 p-3 container flex justify-center'>
                {postperpage < clickedItem.length && (
          <button onClick={handleShowMore} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full flex items-center gap-1 text-xs '>
           <BsHourglassSplit/> Show More
          </button>
          
        )}
        </div>
            </div>
 
    )
}

export default Propertdeatils