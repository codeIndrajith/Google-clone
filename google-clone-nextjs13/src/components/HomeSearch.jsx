// call the client side this component
"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading , setRandomSearchLoading] = useState(false)

  // Google search button handle function
  const handleSubmitFunction = (event) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    router.push(`/search/web?searchTerm=${input}`);
  };

  // I'm Feeling Lucky button handle function
  const randomSearch = async () => {
    setRandomSearchLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

      if(!response) {
        return;
      }
      router.push(`/search/web?searchTerm=${response}`)
      setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmitFunction}
        className="flex w-full mx-auto max-w-[90%] sm:max-w-xl lg:mx-w-2xl border border-gray-200 mt-5 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center lg:flex-row mt-3">
        <button onClick={handleSubmitFunction} className="btn">
          Google Search
        </button>
        <button disabled = {randomSearchLoading} onClick={randomSearch} className="btn">
        {randomSearchLoading ? (
            <img src="spinner.svg" alt="loading..." className="h-6 text-center flex items-center justify-center disabled:opacity-80"/>
        ) : "I'm Feeling Lucky"}          
        </button>
        
      </div>
    </>
  );
}

export default HomeSearch;
