import React from 'react'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate() ;
  return (
    <div className='p-4 flex justify-between sticky w-[100%]    rounded-xl top-0 bg-zinc-900 z-10 '>
      <div className=' flex gap-3'> 
        <button ><CiCircleChevLeft className=' w-8 h-8 bg-zinc-800 hover:bg-zinc-900 rounded-full' onClick={ ()=>navigate(-1)}/> </button>
        <button><CiCircleChevRight className=' w-8 h-8 bg-zinc-800 hover:bg-zinc-900 rounded-full' onClick={(()=>navigate(1))} /> </button>
      </div>
      <div className=' flex gap-3'> 
        <button ><GoBell className='p-2 w-8 h-8 bg-zinc-800 hover:bg-zinc-950 rounded-full'/> </button>
        <button className=' bg-cyan-500 rounded-full text-base border border-white w-8 h-8'> A </button>
      </div>


    </div>
  )
}

export default Header
