import React from "react";

function Footer() {
  return (
    <footer className="my-3 flex flex-col gap-3 md:flex-row md:justify-between">
      <ul className="flex gap-5 justify-center items-center">
        <li>
          <a
            href="#"
            className=" text-gray-400 px-4 py-2 rounded-md"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" text-gray-400 px-4 py-2 rounded-md "
            aria-label="Twitter"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" text-gray-400 px-4 py-2 rounded-md "
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="flex gap-3 md:mx-4">
        <img src="/public/Assets/Help Avatar.svg" alt="" />
        <div >
            <p className="font-lato text-zinc-500">Have any Ques </p>
            <a href="#" className="font-playFair font-medium">Talk to Specialist !</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
