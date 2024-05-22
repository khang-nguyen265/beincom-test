
import React from "react";

import UserAccountNav from "./UserAccountNav";
import Link from "next/link";


const Navbar = () => {
  
  return (
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-6 md:py-4">
      <div className="flex items-center justify-center h-full gap-2 mx-auto sm:justify-between  px-8  max-w-6xl">
        <Link href={"/"} >
          <div className="flex items-center">
              BLOG
          </div>
        </Link>
        <div className="flex items-center gap-2 md:gap-8 ml-10">
          <UserAccountNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

