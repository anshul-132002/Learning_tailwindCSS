import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl bg-black-dark grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center rounded-xl p-5 m-5 md:m-10">
        <div className="flex justify-center relative">
          <img
            src="/public/Assets/signup-background.svg"
            alt="Background"
            className="w-3/4 md:w-full"
          />
          <img
            src="/public/Assets/teamwork.svg"
            alt="Teamwork"
            className="absolute top-40 md:top-64 w-40 md:w-64"
          />
        </div>
        <div className="grid gap-3">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-serif text-center md:text-left">Sign Up</h1>
          <p className="text-sm md:text-base font-thin text-dull-white text-center md:text-left">
            Access to 300+ Hours of courses, Tutorials, and LiveStreams
          </p>
          <form className="space-y-6 text-white">
            <div className="relative">
              <div className="absolute bg-white-light rounded-full left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-2 text-blue-200">
                <MdAlternateEmail />
              </div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full max-w-xs bg-white-light  rounded-full pl-12 py-2 focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>
            <div className="relative">
              <div className="absolute bg-white-light rounded-full left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-2 text-blue-200">
                <FaEye />
              </div>
              <input
                type="password"
                placeholder="Enter your Password"
                required
                className="w-full max-w-xs bg-white-light rounded-full pl-12 py-2 focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>
            <button
              className="bg-gradient-to-r from-cyan-200 to-indigo-600 rounded-full w-full max-w-xs py-2 text-center text-white font-semibold"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="text-dull-white text-sm pt-4 space-y-2 text-center md:text-left">
            <p>
              Already have an account?{' '}
              <a className="text-neon-blue font-semibold cursor-pointer">Sign in</a>
            </p>
            <p>
              Forgot your password?{' '}
              <a className="text-neon-blue font-semibold cursor-pointer">Reset Password</a>
            </p>
            <p>
              Don’t have a password yet?{' '}
              <a className="text-neon-blue font-semibold cursor-pointer">Create Password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
