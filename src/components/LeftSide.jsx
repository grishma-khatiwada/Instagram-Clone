import React from "react";
import {
  AtSign,
  Bell,
  Compass,
  Film,
  House,
  Menu,
  MessageCircleCode,
  Search,
  SquarePlus,
  User,
} from "lucide-react";

export default function LeftSide() {
  return (
    <div className="bg-gray-50 px-4">
      <p>Instagram</p>
      <div className=" flex flex-col justify-between h-[96vh]">
        <div>
          {linkTop.map((eachItem, index) => (
            <div key={index} className="flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80">
              {eachItem.icon}

              <p>{eachItem.Title}</p>
            </div>
          ))}
        </div>

        <div> {linksButtom.map((eachItem, index) => (
            <div key={index} className="flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80">
              {eachItem.icon}

              <p>{eachItem.Title}</p>
            </div>
          ))}</div>
      </div>
    </div>
  );
}

const linkTop = [
  {
    icon: <House />,
    Title: "Home",
  },
  {
    icon: <Search />,
    Title: "Search",
  },
  {
    icon: <Compass />,
    Title: "Explore",
  },
  {
    icon: <Film />,
    Title: "Reels",
  },
  {
    icon: <MessageCircleCode />,
    Title: "Message",
  },
  {
    icon: <Bell />,
    Title: "Notifications",
  },
  {
    icon: <SquarePlus />,
    Title: "Create",
  },
  {
    icon: <User />,
    Title: "Profile",
  },
];

const linksButtom = [
  {
    icon: <AtSign />,
    Title: "Threads",
  },
  {
    icon: <Menu />,
    Title: "More",
  },
];
