
import React, { useContext } from 'react'
import SideBar from './sidebar'
import Player from './Player'
import {createBrowserRouter , RouterProvider} from 'react-router-dom' ;
import Home from './Home' ; 
import {Outlet} from 'react-router-dom' 
import List from './List';
import {PlayerContext} from '../context/player'


const App = () => {
 
  const {audioRef ,track} = useContext(PlayerContext) ; 

  const appRouter = createBrowserRouter([{
    path : '/' , 
    element : <Home/> 
  },
    {path : '/song/:id' , 
    //  element 

  },
{
    path : '/album/:id' , 
    element : <List/>
  }]


   
)
  return (
    <div className='w-full overflow-hidden relative    bg-black h-screen '>
    <div className=' w-[98%]  rounded-xl m-3 h-[87%] flex gap-6  no-scrollbar'>
      <SideBar/>
      <RouterProvider  router={appRouter}/>
      <Outlet/>
      <audio preload='auto' src={track.file} ref={audioRef}>   </audio>
    </div>
    
  <Player/>
     </div>
  )
}

export default App
