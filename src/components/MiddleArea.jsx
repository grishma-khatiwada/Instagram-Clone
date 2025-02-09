import React from "react";
import NewsFeedSection from "./NewsFeedSection";

export default function MiddleArea() {
  return (
    <div>
      <div className="flex gap-4 overflow-x-scroll px-2">
        {stories.map((eachStory, index) => (
          <div key={index}>
            <img
              className="rounded-full h-16 w-16 object-cover border-3 border-red-500 p-0.5"
              src={eachStory.profilePicture}
              alt=""
            />
            <p className="text-sm text-center ">{eachStory.username.slice(0,10)}</p>
          </div>
        ))}
      </div>
      <NewsFeedSection/>
    </div>
  );
}

const stories = [
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "sarusharma",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "lokichaulagain",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "grishmakhatiwada",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "riteshtamang",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "kripakhatiwada",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "prabinjoashi",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "yangmalama",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "jayantidahal",
  },
  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "manishgyawali",
  },

  {
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    storypicture:
      "https://plus.unsplash.com/premium_photo-1738078691405-3527a067a6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "kiranneupane",
  },
];
