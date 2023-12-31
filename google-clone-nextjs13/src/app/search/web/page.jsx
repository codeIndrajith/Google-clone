import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'

async function webSearchPage({searchParams}) {
  const startIndex = searchParams.start || "1";
   await new Promise((resolve) => setTimeout(resolve , 5000))
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.SEARCH_CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  )
  const data = await response.json();

  if(!response.ok) {
    throw new Error("Something went wrong")
  }
  const results = data.items
  if(!results) {
    return <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>No results found</h1>
      <p className='text-lg'>Try searching for something else or go back to the homepage {" "}

        <Link href="/" className='text-blue-500'>
          Home
        </Link>
      </p>
      
      </div>
  }
  return (
    <>
      {results && <WebSearchResults results = {data}/>}
    </>
  )
}
 
export default webSearchPage