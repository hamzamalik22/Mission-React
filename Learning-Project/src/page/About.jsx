import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex justify-center items-center py-10">
        <a
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            About are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Developers
          </h5>
          <div className="flex flex-col mt-2 items-center text-white">
            <li className="mt-2 hover:underline">
              <Link to="/about/hamza">Hamza</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link to="/about/abdullah">Abdullah</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link to="/about/babar">Babar Azam</Link>
            </li>
          </div>
        </a>
      </div>
      <hr />
      <div className="py-5">
          <Outlet />
      </div>
    </>
  );
}

export default About;
