import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share,
} from "lucide-react";
import React from "react";

export default function NewsFeedSection() {
  return (
    <div className="mt-8 space-y-8" >
      {/* single post */}

      {
        posts.map((eachPost,index)=>(
            <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-12 w-12 rounded-full"
                  src={eachPost.profilePicture}
                  alt=""
                />
                <p>
                  {eachPost.username}{" "}
                  <span className="text-xs opacity-70 font-semibold">
                    {" "}
                    10 min ago
                  </span>{" "}
                </p>
              </div>
      
              <MoreHorizontal />
            </div>
      
            <img
              className="h-[70vh] w-full object-cover rounded-sm"
              src={eachPost.postPicture}
              alt=""
            />
      
            <div className="flex items-center justify-between">
              <div className="flex gap-4 ">
                <Heart />
                <MessageCircle />
                <Share />
              </div>
      
              <Bookmark />
            </div>
      
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              perspiciatis saepe vitae.lorem8
            </p>
            <hr />
            </div>
            

        ))
      }
      
    </div>
  );
}




const posts=[
    {
       profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        username:"grishmakhatiwada",
        postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
    },

    {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },

     {
        profilePicture:"https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         username:"grishmakhatiwada",
         postPicture:"//plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
         caption :"ghefbe grhgrn grghrjbg rgbjrgb regmhrg rehgf ",    
     },
]