import Link from "next/link";
import React from "react";

function ImageSearchResults({ results }) {
  //console.log(results);
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
                {/* we try to access image but it's not working.... */}
              {result.pagemap.contextLink && (
                <Link href={result.pagemap.contextLink}>
                  <img className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow" src={result.link} alt={result.title} />
                </Link>
              )}
              {result.link && (
                <Link href={result.link}>
                  <h2 className="group-hover:underline truncate text-xl">{result.title}</h2>
                </Link>
              )}
              {result.link && (
                <Link href={result.link}>
                 <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSearchResults;
