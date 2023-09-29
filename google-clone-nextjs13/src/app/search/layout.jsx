
import SearchHeader from '@/components/SearchHeader'
import './../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'Create a Google clone using Next js 13',
}

export default function SearchLayout({ children }) {
  return (
   
      <div className={inter.className}>
        <SearchHeader />

        {children}

        </div>
  
  )
}
