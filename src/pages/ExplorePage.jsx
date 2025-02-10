import React from 'react';
import image from "../../public/Kagbeni.jpeg";
import imageOne from "../../public/bestview.jpeg";
import imageTwo from "../../public/car.jpeg";
import imageThree from "../../public/desert.jpeg";
import imageFour from "../../public/Dhaulagiri_Guest_House,_Marpha_(4560848344).jpeg";
import imageFive from "../../public/food.jpeg";
import imageSix from "../../public/image.png";
import imageSeven from "../../public/Jomsom.jpeg";
import imageEight from "../../public/Marpha_Brandy.jpg";
import imageNine from "../../public/mountain.jpeg";
import imageTen from "../../public/Thorong-la.jpeg";
import imageEleven from "../../public/Kagbeni.jpeg";
import imageTwelve from "../../public/desert.jpeg";
import {  Play, Search } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="px-4 md:pt-4">
    <div className="mr-10 ml-10 mb-4 flex items-center gap-2 bg-gray-500 border border-gray-300 rounded p-2 shadow-sm">
      <Search className="w-5 h-5 text-white" />
      <span className="text-md text-white font-medium">Search</span>
    </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0.5">
        {exploreSection.map((media, index) => (
          <div key={index} className="w-full aspect-square relative">
            {media.type === 'image' ? (
              <img src={media.src} alt="explore" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full relative">
                <video src={media.src} autoPlay muted loop className="w-full h-full object-cover" />
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer">
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const exploreSection = [
  {
    type: "image",
    src: imageOne,
  },
  {
    type: "image",
    src: imageTwo,
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30272799/12977171_640_360_30fps.mp4",
  },
  {
    type: "image",
    src: imageThree,
  },
  {
    type: "image",
    src: imageFour,
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30272799/12977171_640_360_30fps.mp4",
  },

  {
    type: "image",
    src: imageFive,
  },
  {
    type: "image",
    src: imageSix,
  },
  {
    type: "image",
    src: imageSeven,
  },
  {
    type: "image",
    src: imageEight,
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/30272799/12977171_640_360_30fps.mp4",
  },
  {
    type: "image",
    src: imageNine,
  },
  {
    type: "image",
    src: imageTen,
  },
  {
    type: "image",
    src: imageEleven,
  },
  {
    type: "image",
    src: imageTwelve,
  },
  {
    type: "image",
    src: image,
  },
];