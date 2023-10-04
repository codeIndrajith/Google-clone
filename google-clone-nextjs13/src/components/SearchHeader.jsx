import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import {RiSettings3Line} from 'react-icons/ri'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
  return (
    <header className="sticky bg-white top-0">
      <div className="flex p-6 justify-between items-center">
        <Link href="/">
          <Image alt="google image"
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/2560px-Google_logo_%282013-2015%29.svg.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon"/>
          <BsFillGrid3X3GapFill className="header-icon"/>
        </div>
        <button className="bg-blue-500 ml-2 text-white px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-all rounded-md ">Sign In</button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
