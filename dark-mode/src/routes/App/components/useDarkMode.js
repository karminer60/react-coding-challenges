import {useState, useEffect} from 'react';


export function useDarkMode ()  {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode){
            document.body.classList.add('dark-mode');
        }
        else{
            document.body.classList.remove("dark-mode");
        }
        
      }, [darkMode])
    //allows us to check whether darkMode is true and to set Dark Mode when using useDarkMode
    return [darkMode, setDarkMode]
}