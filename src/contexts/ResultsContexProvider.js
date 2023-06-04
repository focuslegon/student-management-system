import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const api_key = process.env.REACT_APP_GOOGLE_SEARCH_API;
const BaseUrl = `http://api.serpstack.com/search?access_key=${api_key}&query=`;

export const  ResultContextProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading]  = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const getResult = async (query,type=false) => {

        // for testing , 
        if (type) {
            setIsLoading(true);
           return setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
        // end tesing


        setIsLoading(true);
        try {
        const response = await fetch(`${BaseUrl}${query}`,{
            method: 'GET',
        });
        const data = await response.json();
        setResult(data);
        setIsLoading(false)
     } catch (error) {
            
    }
    }

    return (
        <ResultContext.Provider value={{getResult, result, searchTerm, setSearchTerm, isLoading}}>
              {children}
       </ResultContext.Provider>
    );

}

export const useResultContext = () => useContext(ResultContext);