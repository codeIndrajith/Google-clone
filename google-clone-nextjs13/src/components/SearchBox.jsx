"use client"

import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import { BsMic } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams , useRouter } from 'next/navigation'

function SearchBox() {
  const searchParams = useSearchParams();
  // get the url searchTerm value and set
  const searchTerm = searchParams.get('searchTerm')
  // set the variable value is searchTerm value or set the default empty string
 const [term , setTerm] = useState(searchTerm || "");
 const router = useRouter();
 const handleSubmit = (e) => {
  e.preventDefault();
  if(!term.trim()) {
    return
  }
  router.push(`/search/web?searchTerm=${term}`)
 }
  return (
    <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow mx-w-3xl items-center' onSubmit={handleSubmit}>
        <input type="text" className='w-full focus:outline-none' value={term} onChange={(e) => setTerm(e.target.value)}/>
        <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={() => setTerm("")}/>
        <BsMic className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-gray-300 border-l-2'/>
        <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer ml-3'/>

    </form>
  )
}

export default SearchBox