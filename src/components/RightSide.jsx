import React from 'react'

export default function RightSide() {
  return (
    <div className='bg-gray-50 px-4'>

        <div className='flex items-center justify-between font-semibold opacity-80'>
            <p>Suggested for you</p>
            <p className='text-blue-500 cursor-pointer'>See All</p>
        </div>



<div className='space-y-4'>        
{
    people.map((eachItem, index) =>(
        <div 
        key={index}
        className='flex items-center justify-between'>
            <div className='flex gap-2'>
                <img height={50} width={50} className='rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                <div>
                    <p className='text-lg font-semibold'>{eachItem.username}</p>
                    <p className='opacity-60'>Followed by {eachItem.followedBy}</p>
                </div>
            </div>



            <p className='font-semibold text-blue-500'>Follow</p>
        </div>

    )
    )
}

        </div>

    </div>
  )
}


const people=[
    {
        profilepicture:"https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        username:"SaruSharma",
        followedBy:"KripaKhatiwada",
    },
    {
        profilepicture:"https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        username:"SaruSharma",
        followedBy:"KripaKhatiwada",
    },
    {
        profilepicture:"https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        username:"BinitaSharma",
        followedBy:"Joshi",
    },
    {
        profilepicture:"https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        username:"SaruSharma",
        followedBy:"Loki Chaulagai",
    },
    {
        profilepicture:"https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        username:"SaruSharma",
        followedBy:"Ritesh tamang",
    },
]
