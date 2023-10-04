import React from 'react'

async function webSearchPage() {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.SEARCH_CONTEXT_KEY}&q=lecture`
  )
  const data = await response.json();
  console.log(data);
  const results = data.items
  return (
    <>
      {results && results.map((result) => <h1>{result.title}</h1>)}
    </>
  )
}
 
export default webSearchPage