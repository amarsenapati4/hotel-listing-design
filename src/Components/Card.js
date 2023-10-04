import React from 'react'
import { IoLocationOutline,IoBedOutline } from 'react-icons/io5'
import {RiBuildingLine} from 'react-icons/ri'
import {LiaBathSolid} from 'react-icons/lia'
import {BsArrowsMove} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import { Carousel } from 'flowbite-react';

const Card = ({p}) => {
    
    return (
        <div className='shadow-2xl w-full border-sky-950 min-h-96 bg-[#fefefe] rounded-2xl'>
            <div className='flex justify-center items-center p-3 relative'>
                {/* <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" /> */}
                <div className='w-[300px] h-[200px] rounded-xl relative'>
                <Carousel      leftControl=" "
      rightControl=" ">
                <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" />
                <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" />
                <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" />
                <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" />
                <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" />
                <img className='w-[300px] h-[200px] rounded-xl relative' src="https://placehold.co/300x200" alt="" />
    </Carousel>
                </div>
                <div className="absolute w-4/5  top-0  flex justify-between items-center my-8">
        <button className='text-blue-500 border bg-white rounded-full p-1 font-semibold'>{p.type}</button>
        <div className='border-[1px] bg-white mb-1 w-7 h-7 text-blue-500 flex justify-center rounded-full items-center '>
             <AiOutlineHeart/>
             </div>
      </div>
            </div>
       
            <div className='flex flex-col w-11/12 ml-2 space-y-2 '>
                <h1 className='flex items-center text-sm'><span className='text-orange-500'><IoLocationOutline /> </span>{p.location}</h1>
                <p className='font-semibold'>{p.address}</p>
            </div>
            <div className='m-2 flex  justify-between items-center text-xs my-4 w-1/2]'>
                <p><RiBuildingLine/>3 Room</p>
                <p><IoBedOutline/>4 Bed</p>
                <p><LiaBathSolid/>1 Bath</p>
                <p><BsArrowsMove/>732 sft</p>
             </div>
            <hr className="h-[1px] w-11/12 bg-gray-100 border-0 mt-6 border-dashed mx-3" />
            <div className='flex items-center justify-between w-11/12 h-auto my-2 container mx-auto'>
                <p><span className='text-blue-600 font-bold'>${p.price}</span>/month</p>
                    <button type="button" class="text-blue-600 bg-white border-blue-600 border focus:ring-4 focus:ring-blue-300 
             font-medium rounded-xl text-sm px-2 py-1 mr-2 mb-2 mt-1 hover:bg-gray-100">Read More</button>
                
            </div>
        </div>
    )
}

export default Card