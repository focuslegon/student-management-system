import React from 'react'

export default function Texts({result}) {
  return (
    <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
    {result?.organic_results ? (
       result?.organic_results?.map(({title, url, snippet},index) => 
       (
        <div key={index} className="md:w-2/5 w-full">
          <a href={url} target="_blank" rel="noreferrer">
            <p className="text-sm">
            {url.length>30?url.substring(0,30):url}
            </p>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
            {title}
            </p>
          </a>
        </div>
       )
       )

      ) : (
             <p>No Text Results</p>
     )}
   </div>
  )
}
