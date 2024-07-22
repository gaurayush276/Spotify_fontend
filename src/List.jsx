import React, { useEffect, useRef } from 'react'
import Header from './Header'
import {albumsData, assets} from './assets/assets'
import { useLocation, useParams, useSearchParams ,useNavigate} from 'react-router-dom'
import { songsData } from './assets/assets'
import ListItems from './ListItems'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { GiConsoleController } from 'react-icons/gi'
const List = () => {
    const {id}  = useParams() ; 
    const data = albumsData[id] ; 
    const location = useLocation() ; 
    console.log(location.pathname) ;
    const isAlbum = location.pathname.slice(1,6 ) ; 
    console.log(isAlbum)
    const bg = isAlbum === 'album' ? data.bgColor : '' ;
    console.log(bg); 
    const navigate = useNavigate() ;
    const bgCol = useRef() ;

    useEffect( ()=>{
       if(isAlbum === 'album' ){
        bgCol.current.style.background = `linear-gradient(${bg}, #121212)` ;
        console.log('done changing bg-color')
       } 
    }, [])
    

  return (
    <div ref={bgCol} className='w-3/4 rounded-xl mt-2 relative bg-zinc-900 overflow-auto   no-scrollbar'>
     <div className='p-4 flex justify-between sticky w-[100%]    rounded-xl top-0  z-10 '>
      <div className=' flex gap-3'> 
        <button ><CiCircleChevLeft className=' w-8 h-8 bg-zinc-800 hover:bg-zinc-900 rounded-full' onClick={(()=>navigate(-1))}/> </button>
        <button><CiCircleChevRight className=' w-8 h-8 bg-zinc-800 hover:bg-zinc-900 rounded-full' onClick={(()=>navigate(1))}/> </button>
      </div>
      <div className=' flex gap-3'> 
        <button ><GoBell className='p-2 w-8 h-8 bg-zinc-800 hover:bg-zinc-950 rounded-full'/> </button>
        <button className=' bg-cyan-500 rounded-full text-base border border-white w-8 h-8'> A </button>
      </div>


    </div>
     <div className=' ml-4 flex md:flex  '> 
        <img className='w-48 rounded ml-4 ' src={ data.image}/>
        <div className='flex flex-col ml-4'>
      <h1 className=' text-5xl font-bold'>{data.name}</h1>

            <h2 className='text-5xl font-bold mb-4 md:text-7xl'></h2>
            <h3>{data.desc}</h3>
            <p className='mt-1'> 
                <img className='inline-block w-5' src={assets.spotify_logo} alt=''/>
                <b> Spotify </b>
                * 1,323,132 ikes
            </p>
        </div>
     </div>

     <div className='grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p> <b className='mr-4'>#  </b> Title </p>
        <p> Album </p>
        <p className='hidden sm:block '> Date Added </p>
        <img className=' w-4 h-4 mr-2' src={assets.clock_icon} alt=''/>
         </div>
         {
        songsData.map( (item , index) =>(
          <ListItems key={index} index={index} bg={bg} name ={item.name} image={item.image} duration ={item.duration} />
        )) 
         
         }
         
    </div>
  )
}

export default List
