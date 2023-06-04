import { useEffect, useState, createContext } from "react";

import { NavBar } from "./components/NavBar"; 
import { Routes } from "./components/Routes";
import  Footer  from "./components/Footer";

export const DarkThemeContext = createContext();

function App () {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(()=> {
    const Stored = localStorage.getItem('dark');
    if (Stored) {
      const storedDark = JSON.parse(Stored);
      setDarkTheme(storedDark)
    }else{
      setDarkTheme(darkTheme)
    }
  },[])

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
    <div className={darkTheme?'dark':''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes/>
        <Footer/>
      </div>
    </div>
    </DarkThemeContext.Provider>
  );
}
export default App;
