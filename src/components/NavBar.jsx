import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';


export const NavBar = ({darkTheme,setDarkTheme}) => {

  const setDisplayMode = ()=>{
    if (darkTheme) {
      localStorage.setItem('dark', JSON.stringify(!darkTheme));
    }else{
      localStorage.setItem('dark', JSON.stringify(!darkTheme));
    }
    const storedDark = JSON.parse(localStorage.getItem('dark'));
    setDarkTheme(storedDark);
  }

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900 ">
                    Google 🔍
                </p>
            </Link>
            <button type='button' onClick={setDisplayMode} className="text-xl dark:bg-gray-700 dark:text-white bg-white border rounded-full px-3 py-1 hover:shadow-lg ">
              {darkTheme?'Light 💡':'Dark 🌙'}
            </button>
        </div>
        <Search /> 
    </div>
  )
}
