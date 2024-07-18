import React from 'react';

function Header() {
  return (
    <header className='bg-black h-16 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-30'>
      <div className='flex justify-around items-baseline pt-3'>
        <div className='font-extrabold text-3xl text-cyan-400'>FormMaker</div>
        <nav className='flex items-baseline space-x-16'>
          <ul className='flex space-x-4'>
            <li className='text-white font-medium'><a href="#">Home </a></li>
            <li className='text-white font-medium'><a href="#">About </a></li>
            <li className='text-white font-medium'><a href="#">Contact Us </a></li>
          </ul>
          <div className='space-x-4'>
            <button type="button" className="text-white bg-gradient-to-br from-green-400
              to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
              focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center me-2 mb-2">Sign-up</button>
            <button type="button" className="text-white bg-gradient-to-br from-green-400
              to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
              focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center me-2 mb-2">Sign-in</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
