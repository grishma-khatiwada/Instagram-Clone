import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import MiddleArea from "./components/MiddleArea";

export default function App() {
  return (
    <div className="relative flex h-screen">
      <div className="sticky top-0 h-screen w-2/12">
        <LeftSide />
      </div>

      <div className="overflow-y-auto h-screen w-6/12">
        <MiddleArea />
      </div>

      <div className="sticky top-0 h-screen bg-gray-50 w-4/12">
        <RightSide />
      </div>
    </div>
  );
}
