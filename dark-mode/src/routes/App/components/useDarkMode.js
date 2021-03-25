import {useState} from 'react';

const useDarkMode = () => {
    const [darkMode, useDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode){
            document.body.classList.add('dark-mode');
        }
        else{
            document.body.classList.remove("dark-mode");
        }
        
      }, [darkMode])

    return[darkMode, setDarkMode]
}