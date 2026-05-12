import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Loginfield = () => {
  return (
    <div className=" flex flex-col items-end  gap-3">
      <h1 className="font-bold text-2xl pl-2">Login with </h1>

      <div className="space-y-2 flex flex-col w-full  ">
        <button className="border-2 btn btn-outline btn-info py-1">
          <FaGoogle size={20} />
          Login with Google{" "}
        </button>
        <button className="border-2 btn btn-outline py-1">
          <FaGithub size={20} />
          Login with Github{" "}
        </button>
      </div>
    </div>
  );
};

export default Loginfield;
