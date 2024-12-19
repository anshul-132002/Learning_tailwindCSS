import React from "react";

function ContainerTail() {
  return (
    <div className="relative">
      <header className="  flex justify-around bg-pink-400 h-16  fixed w-full shadow-xl shadow-orange-300 pt-5  ">
        <ul className="text-white font-mono ">home</ul>
        <ul className="text-white font-mono ">about </ul>
        <ul className="text-white font-mono ">contact us</ul>
      </header>
      <div className="container mx-auto">
        <div className=" bg-fuchsia-500 h-48"></div>
        <div className=" bg-green-500 h-48"></div>
        <div className=" bg-blue-500 h-48"></div>
        <div className=" bg-purple-500 h-48"></div>
      </div>

      <div className="bg-[url(Photo.jpeg)] sticky z-20 h-96 bg-no-repeat bg-center brightness-100 contrast-75 invert object-fill my-5">
        anshul
      </div>
      <div className="flex justify-center">
        <img
          src="Photo.jpeg"
          className="h-96 w-96 object-fill hover:object-scale-down shadow-sm-light blur-sm shadow-red-600 my-5"
          alt=""
        />
      </div>

      <div className="h-48 w-full bg-gradient-to-tl to-blue-800 from-red-600">
        hello gradient
      </div>
    </div>
  );
}

export default ContainerTail;
