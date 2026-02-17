import React from "react";
import { assets } from "../Images/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm w-full max-w-6xl px-4">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            sint eum fugit, odio veniam debitis. Tempora, quaerat laborum.
            Alias, labore? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Error, perspiciatis!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 988-164-8912</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-6xl px-4">
        <hr />
        <p className="py-5 text-center text-sm text-gray-600">
          Copyright © 2026 Your Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
