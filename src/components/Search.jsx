import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../contexts/ResultsContexProvider";
import Links from "./Links";

export default function Search() {

  const storedSearch = localStorage.getItem('search').toString()||'';
  const [search, setSerach] = useState(storedSearch);
  const {setSearchTerm} = useResultContext();
  const [debounceValue] = useDebounce(search, 600);
  useEffect(()=>{
    if (debounceValue) {
      localStorage.setItem('search',search.toString());
       setSearchTerm(search)
    }
  },[debounceValue]);

  const handleSearchTerm = (event) => {
      const searchInput = event.target.value;
      setSerach(searchInput);
  }
  const handleClearButton = () => {
    setSerach('');
}
  return (
    <div className="relative sm:ml-48 md:ml-50 sm:-mt-10 mt-3">
        <input 
         value={search}
         type="text" 
         onChange={(e)=>handleSearchTerm(e)}
         className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-lg shadow-sm outline-none px-6 py-2 text-black hover:shadow-lg "
         placeholder="Search here ..."
          />
          {search && (
            <button 
            type="button" 
            className="absolute top-1.5 right-7 text-md text-gray-500"
            onClick={()=>handleClearButton()}
            >
              x
            </button>
          )}
      <Links />
    </div>
  )
}
