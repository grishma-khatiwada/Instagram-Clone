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
import logo from "../../public/image.png"
import { NavLink } from "react-router";

export default function LeftSide() {
  return (
    <div className="bg-gray-50 px-4 pt-10" >
      <img  className=" w-30 mb-8" src={logo} alt="" />


      <div className=" flex flex-col justify-between h-[86vh]">
        <div className="space-y-2">
          {linkTop.map((eachItem, index) => (
            <NavLink
            to= {eachItem.Path}
            key={index} className="flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80">
              {eachItem.icon}

              <p>{eachItem.Title}</p>
            </NavLink>
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
    Path: "/",
  },
  {
    icon: <Search />,
    Title: "Search",
    Path: "/",
  },
  {
    icon: <Compass />,
    Title: "Explore",
    Path: "/explore",

  },
  {
    icon: <Film />,
    Title: "Reels",
    Path: "/reels",

  },
  {
    icon: <MessageCircleCode />,
    Title: "Message",
    Path: "/messages",

  },
  {
    icon: <Bell />,
    Title: "Notifications",
    Path: "/notificatins",

  },
  {
    icon: <SquarePlus />,
    Title: "Create",
    Path: "/create",

  },
  {
    icon: <User />,
    Title: "Profile",
    Path: "/profile",

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
