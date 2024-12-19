import React from "react";

function Postion() {
  return (
    <div className="bg-purple-400 relative size-96 rounded-md ">
      <div className="bg-red-900 size-16 rounded-md absolute bottom-5 right-5"></div>
      <div className="bg-green-400 size-16 rounded-md absolute top-5 right-5"></div>{" "}
      <div className="bg-amber-400 size-16 rounded-md absolute top-5 left-5"></div>{" "}
      <div className="bg-pink-400 size-16 rounded-md absolute bottom-5 left-5"></div>{" "}
      
    </div>
  );
}

export default Postion;
