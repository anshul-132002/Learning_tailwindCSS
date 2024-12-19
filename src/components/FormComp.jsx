import React from "react";

function FormComp() {
  return (
    <div className="space-y-4 mx-5 lg:mx-0 ">
      <form action="" className="flex flex-col gap-4 md:flex-row md:justify-center  md:gap-2  lg:justify-start">
        <input
          type="text"
          name=""
          id="email"
          placeholder="Enter the Email Address "
          className="placeholder:text-gray-400 rounded-md px-4 py-3  md:shadow-lg "
        />
        <button className=" bg-blue-500 px-4 py-3  text-white font-lato font-medium rounded-md ">
          Suscribe
        </button>
      </form>
      <div className="flex gap-3 justify-center lg:justify-start">
        <img src="/public/Assets/Checkmark.svg" alt="" />
        <p className="font-lato text-gray-600 text-lg">
          No spam , ever , Unsuscribe Anytime !!{" "}
        </p>
      </div>
    </div>
  );
}

export default FormComp;
