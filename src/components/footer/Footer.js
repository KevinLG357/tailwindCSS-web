import React from "react";

const footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:items-center dark:bg-gray-800 mt-5 text-center">
      <span className="text-sm text-gray-500 dark:text-gray-400 mx-auto">
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
