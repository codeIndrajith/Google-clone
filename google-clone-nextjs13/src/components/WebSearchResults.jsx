import Link from "next/link";
import React from "react";
import parser from 'html-react-parser'
import PaginationButtons from "./PaginationButtons";

function WebSearchResults({ results }) {
  return (
    <div className ="w-full mx-auto px-3 pb-40 sm:pb-96 md:pb-36 lg:pb-32 sm:pr-52 md:pr-52 lg:pr-52 sm:pl-[5%] md:pl-[14%] lg:pl-52 min-h-[100vh] flex flex-col justify-between">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="mb-8 max-width-xl" key={result.link}>
            <div className="group flex flex-col">
                <Link className="text-sm truncate" href={result.link}>
                    {result.formattedUrl}
                </Link>
                <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" href={result.link}>
                    {result.title}
                </Link>
            </div>
             <p className="text-gray-600">{parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <div className="">
        <PaginationButtons />
      </div>
    </div>
  );
}

export default WebSearchResults;
