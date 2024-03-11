import React from "react";
import { CustomButton } from "../components/CustomButton";
import { Link } from "react-router-dom";

export const SignUp: React.FC = () => {
  return (
    <div className="mt-[60px]">
      <div className="lg:w-[30%] m-auto">
        <h1 className="text-[24px] font-semibold text-center">Sign Up</h1>
        <div className="flex flex-col gap-[30px] mt-[30px]">
          <input
            className="bg-white outline-none py-2 px-3 rounded-md"
            type="text"
            placeholder="Username"
          />
          <input
            className="bg-white outline-none py-2 px-3 rounded-md"
            type="text"
            placeholder="Email"
          />
          <input
            className="bg-white outline-none py-2 px-3 rounded-md"
            type="text"
            placeholder="Password"
          />

          <CustomButton
            type="button"
            className="py-[8px] px-[20px] text-white"
            text="Sign up"
          />
        </div>
        <div className="flex gap-2 text-[14px] mt-[10px] font-semibold">
          <span>Have an account? </span>
          <Link to="/sign-in">
            <span className="text-blue-500 hover:underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
