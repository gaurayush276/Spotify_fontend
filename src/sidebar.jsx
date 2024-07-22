import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { CiBoxList } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
  


const SideBar = () => {

   
  return (
                <div className=' w-72 sm:block hidden  '>
        
                <div className=' w-72   bg-zinc-900 rounded-xl m-3'> 
                 <ul className='p-6'>
                     <a href={'/'}> <li className=' hover font-semibold text-base   pb-2 flex  items-center gap-2 mb-3 cursor-pointer'> 
                     <GoHome  className=' w-6 h-6 text-white'/>  <span className=' text-gray-300 hover:text-white' > Home </span>
                      </li> 
                      </a>
                    
                     <li className=' font-semibold  text-base  flex items-center gap-2 cursor-pointer'> 
                     <CiSearch className=' w-6 h-6 text-white' /> <span  className=' text-gray-300 hover:text-white'> Search</span> </li>
                    
                 </ul>
                </div>
                <div className=' w-72  h-96 bg-zinc-900 rounded-xl m-3'>
                 <ul className=' flex p-4 justify-between'> 
                     <li    className=' font-semibold text-base  text-gray-300 hover:text-white pb-2 flex  items-center gap-2 mb-3 cursor-pointer'> <MdOutlineLibraryAddCheck /> Your Library </li>
                     <li className='flex gap-2 '>  <GoPlus  className=' text-white w-6 h-6'/>
                     <GoArrowRight  className='text-white w-6 h-6 '/>
                        
                     </li>
                 </ul>
                 <button className='ml-3 rounded-full text-white p-2 bg-neutral-700 font-semibold text-sm'> Playlist </button>
                 <div className=' flex justify-between p-3'> <CiSearch className='text-white w-8 h-8 cursor-pointer hover:bg-neutral-700 hover:rounded-full p-1' /> <span  className='text-white flex items-center gap-1 cursor-pointer'> Recents <CiBoxList /></span> </div>
                 </div>
                 
             </div> 
         


    
   
  )
}

export default SideBar
