import React, {createContext, useState, useEffect, useMemo} from 'react';


export const ThemeContext = createContext({});

const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
};

const darkTheme = {
  backgroundColor: '#000000',
  textColor: '#FFFFFF',
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const ThemeContextProvider = (props: any) => {
  const {LIGHT, DARK} = THEMES;
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = async () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
    // try {
    //   await AsyncStorage.setItem('theme', newTheme);
    // } catch (error) {
    //   console.error('Error storing theme:', error);
    // }
  };

  // const systemTheme = useColorScheme();
  // const fetchTheme = async () => {
  //   try {
  //     const storedTheme = await AsyncStorage.getItem('theme');
  //     if (storedTheme) {
  //       setTheme(storedTheme);
  //     } else {
  //       setTheme(LIGHT);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving theme:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTheme();
  // }, [systemTheme]);

  const colorPalette = useMemo(() => {
    return theme === LIGHT ? lightTheme : darkTheme;
  }, [theme]);

  const contextValue = {theme, toggleTheme, colorPalette};

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
