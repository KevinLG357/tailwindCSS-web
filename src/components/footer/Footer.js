import React from "react";

const footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-5">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto">
        © 2022{" "}
        <a href="https://kevinlg.dev" className="hover:underline">
          Kevin López González
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default footer;
