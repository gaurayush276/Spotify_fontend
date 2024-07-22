import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PlayerContext } from '../context/player';
 const ListItems = ({ index , name , image , duration ,bg}) => {
    const bgcol = useRef() ;
    const [hovered , setHovered] = useState(false) ; 
    const navigate = useNavigate() ; 

   
    useEffect( ()=>{
    bgcol.current.style.background = hovered ? bg : '' ; 
    } ,[hovered, bg] ) 

    const {playWithId} = useContext(PlayerContext) ; 
   return (
    <div ref={bgcol} 
   //  onClick={ ()=> navigate('/song/' + index  )}
    onClick={ ()=>playWithId(index)}
     className='grid grid-cols-4  pl-2 text-[#a7a7a7] items-center hover:rounded-xl cursor-pointer min-h-5 p-3' onMouseEnter={ ()=> setHovered(true)}  onMouseLeave={()=> setHovered(false)}>
    <p className='flex gap-3 items-center'> <span> {index + 1 }</span> <img  src={image} className=' w-10 h-10'/> {name} </p>
    <p> Album </p>
    <p className='hidden sm:block '> 17-07-24 </p>
    <p className='mr-2'> {duration}</p>
     </div>
     

  )
}

export default ListItems
