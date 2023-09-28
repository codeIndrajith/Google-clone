import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      {/* Header section  */}
      <HomeHeader />

      {/* Body section  */}
      <div className="flex items-center flex-col mt-24">
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/2560px-Google_logo_%282013-2015%29.svg.png"
        />
        <HomeSearch />
      </div>
    </>
  );
}

export default Home;
