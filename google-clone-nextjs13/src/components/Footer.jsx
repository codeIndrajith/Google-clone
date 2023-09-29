import CountryLookup from './CountryLookup'

function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className="border-b px-8 py-3">
            <CountryLookup />
        </div>
        <div className="flex flex-col justify-between items-center sm:flex-row px-8 py-3 space-y-7 sm:space-y-0">
            <ul className='flex items-center space-x-6'>
                <li className='Link'>About</li>
                <li className='Link'>Advertising</li>
                <li className='Link'>Business</li>
                <li className='Link'>How Search Work</li>
            </ul>

            <ul className='flex items-center space-x-6'>
                <li className='Link'>Privacy</li>
                <li className='Link'>Term</li>
                <li className='Link'>Setting</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer