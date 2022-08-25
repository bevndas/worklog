import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import {getData} from './utils/storage';
import useThemeToggle from './hooks/useThemeToggle';

function App() {
    const [currentTheme, setTheme] = useThemeToggle();
  useEffect(() => {
     // @ts-ignore
      setTheme(currentTheme);
  })

  return (
    <AppRouter/>
  );
}

export default App;
