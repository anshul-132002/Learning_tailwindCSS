import React from "react";
import FormComp from "./FormComp";
import AddV from "./AddV";

function ImageSection() {
  return (
    <div className="lg:flex h-screen  items-center justify-center ">
     
      <div className="flex items-center justify-center   my-5 md:px-10 md:py-7 lg:flex-1  order-2 lg:h-96">
       
        <img
          src="/public/Assets/Blue Shape.svg"
          alt=""
          className=" h-64 -rotate-45 md:h-72 lg:h-96"
        />
        <img
          src="/public/Assets/pink Shape.svg"
          alt=""
          className="absolute h-64 -rotate-[30deg] md:h-72 lg:h-96"
        />
        <img
          src="/public/Assets/purple Shape.svg"
          alt=""
          className="absolute h-64 -rotate-[15deg] md:h-72 lg:h-96"
        />
        <img
          src="/public/Assets/Hero Image (Model).png"
          alt=""
          className="absolute h-64 md:h-72 lg:h-96"
        />
      </div>
      <div className="space-y-4 mb-4 lg:flex-1 order-1 pl-7">
        <h1 className="text-5xl font-bold leading-tight font-playFair ">Host your website less than 5 minutes ! </h1>
        <p className="font-lato text-gray-400 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem porro, voluptatem nulla quas repellendus modi accusamus quibusdam, nam optio consequatur distinctio, illo ex ullam alias! Quam, dolores. Enim, sequi sed?</p>
        <FormComp></FormComp>
        
      </div>
    </div>
  );
}

export default ImageSection;
