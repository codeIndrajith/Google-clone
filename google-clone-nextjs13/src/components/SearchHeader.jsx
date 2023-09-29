import Image from "next/image";
import Link from "next/link";
import React from "react";

function SearchHeader() {
  return (
    <header>
      <div className="">
        <Link href="/">
          <Image
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/2560px-Google_logo_%282013-2015%29.svg.png"
          />
        </Link>
      </div>
    </header>
  );
}

export default SearchHeader;
