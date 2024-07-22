import React, { useContext } from 'react'
import {assets } from './assets/assets' ;
import { PlayerContext } from '../context/player';


const Player = () => {
   const {seekbar ,seekbg ,playStatus , play ,pause ,track , time , previous , next} = useContext(PlayerContext)
   console.log(track) ; 
  return (
    <div className='hidden lg:flex items-center gap-4 justify-between mx-5'>
        <div className=' flex  gap-3'>
        <img className='w-12' src={track.image} alt=''/>
      <div>
        <p> {track.name }</p>
        <p> {track.desc.slice(0,12) }</p>
      </div> </div>
      
      <div className=' flex flex-col item-center gap-1 '> 
 <div className='flex gap-4'>
     <img className=' w-4 cursor-pointer' src={assets.shuffle_icon} alt =''   />
     <img onClick={ previous} className=' w-4 cursor-pointer' src={assets.prev_icon}  alt =''/>{
      !playStatus ? <img onClick={play} className=' w-4 cursor-pointer' src={assets.play_icon} alt ='' />
      : 
     <img  onClick={pause} className=' w-4 cursor-pointer' src={assets.pause_icon} alt ='' />
     }
     
     <img onClick={ next} className=' w-4 cursor-pointer' src={assets.next_icon} alt ='' />
     <img className=' w-4 cursor-pointer' src={assets.loop_icon} alt ='' />
 </div>

 <div className='flex items-center gap-5'> 
    <p> {time.currentTime.minute}  : {time.currentTime.second}</p>
    <div ref={seekbg} className=' w-[60vw] max-w-[500px] rounded-full  cursor-pointer bg-gray-300'>
        <hr  ref ={seekbar } className=' h-1 border-none w-0 bg-green-800 rounded-full'/>
        </div>
 <p> {time.totalTime.minute}  : {time.totalTime.second}</p>
 </div>

      </div>
 <div className=' hidden lg:flex items-center gap-2 opacity-75'> 
    <img className=' w-4' src={assets.play_icon} alt=''/>
    <img className=' w-4' src={assets.mic_icon} alt=''/>
    <img className=' w-4' src={assets.queue_icon} alt=''/>
    <img className=' w-4' src={assets.speaker_icon} alt=''/>
    <img className=' w-4' src={assets.volume_icon} alt=''/>
    <div className=' w-20 bg-slate-50 h-1 rounded'> </div>
    <img className=' w-4' src={assets.mini_player_icon} alt=''/>
    <img className=' w-4' src={assets.zoom_icon} alt=''/>
 </div>
    </div>
  )
}

export default Player ; 
