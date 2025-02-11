import { Camera, CameraIcon, ChevronDown, Heart, MessageCircle, MoreHorizontal, Music, Send } from 'lucide-react'
import React from 'react'
import image from "../../public/bestview.jpeg"

export default function ReelsPage() {
  return (
    <div className=''>

      {
        reels.map((eachItem,index)=>(
          <div key={index} className='relative'>
          <video className='w-full'
          autoPlay ={true}
          controls ={true}
          muted = {true}
           src="https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4"></video>
   
          <div className=' p-4 absolute top-0 flex items-center justify-between w-full text-white ' >
           <div className='flex'>
             <p className='text-2xl font-semibold'>Reels</p>
             <ChevronDown size={28} className='mt-1.5' />
           </div>
   
           <Camera size={28}/>
   
          </div>
   
          <div className='p-4 text-white absolute bottom-12 flex justify-between items-end w-full'>
   
           <div>
   
             <div className='flex items-center gap-2' >
               <img 
               className='h-12 w-12 rounded-full object-cover'
               src={image} alt="" />
   
   <div>
               <p className='text-sm'>Grishma Khatiwada</p>
               <p className='text-xs flex items-center gap-1 '> <Music size={12}/> Gone Gone Gone</p>
             </div>
   
             </div>
             
   
   
           </div>
   
   
           <div className='space-y-6'>
             <Heart size={28}/>
             <Send size={28}/>
             <MessageCircle size={28}/>
             <MoreHorizontal size={28}/>
             <Music size={28}/>
   
           </div>
   
   
          </div>
   
   
         </div>


        ))
      }
      
    </div>
  )
}



const reels = [
  {
    id:1,
    username: "arijit singh",
    Music: "bardali",
    video:"https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
  {
    id:1,
    username: "Sushant kc",
    Music: "bardali",
    video:"https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  }, {
    id:1,
    username: "coldplay",
    Music: "dghgfeggggggg" ,
    video:"https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  }, {
    id:1,
    username: "taylor swift",
    Music: "bardali muni",
    video:"https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  }, {
    id:1,
    username: "nick jonas",
    Music: "bardali mathi",
    video:"https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  }, {
    id:1,
    username: "narayan gopal",
    Music: "bardali maaaaaaa",
    video:"https://videos.pexels.com/video-files/30418809/13035228_360_640_30fps.mp4",
  },
]