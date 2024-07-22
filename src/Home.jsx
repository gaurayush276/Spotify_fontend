import React from 'react'
import Header from './Header'
import AlbumItem from './AlbumItem'
import {albumsData , songsData} from './assets/assets'
import SongItems from './SongItems'
 const Home = () => {

  

  return (
    <div className='w-3/4 rounded-xl mt-2 relative bg-zinc-900 overflow-auto no-scrollbar' >
      <Header/>
      <h1 className='my-5 font-bold text-2xl  '> Featured</h1> 
        <div className=' flex  overflow-auto no-scrollbar'>
        <div className=' flex'> 
        {
        albumsData.map( ( item , index )=>(
          <AlbumItem name ={item.name} id = {item.id}  desc ={item.desc} image = {item.image} key={index} />
        ))
      }
      </div>
       </div>
        <div className=' flex  overflow-auto no-scrollbar'>
        <div className=' flex'> 
        {
        songsData.map( ( item , index )=>(
          <SongItems name ={item.name} id = {item.id}  desc ={item.desc} image = {item.image} key={index} />
        ))
      }
      </div>
       </div>
        
    </div>
  )
}

export default Home
