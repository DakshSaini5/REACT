import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const C2 = () => {
  const {theme, setTheme} = useContext(ThemeContext);

    function handleClick () {
        if (theme === 'light'){
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

  return (
    <div>
        <button onClick={handleClick}> change theme </button>
        <p> Theme : {theme}</p>

    </div>
  );
};

export default C2;
