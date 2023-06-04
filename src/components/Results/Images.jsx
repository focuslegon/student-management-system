import React from 'react'

export default function Images({result}) {
  return (
    <div className="flex flex-wrap justify-center items-center  ">
        {result?.inline_images ? (
       result?.inline_images?.map(({image_url, title},index) => 
       (
       <a className="md:w-2/5 lg:w-1/3 p-5" href={image_url} target="_blank" rel="noreferrer" key={index} >
        <img className="w-full" src={image_url} alt={title} loading="lazy" />
          <p className="w-36 break-words text-sm mt-2">
            {title}
          </p>
       </a>
       ))): (<p>No Image Results</p>)
    }
    </div>
  )
}
