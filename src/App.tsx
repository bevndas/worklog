import React, {useEffect} from 'react';
import 'assets/scss/app.scss';
import AppRouter from './AppRouter';
import useThemeToggle from './hooks/useThemeToggle';

function App() {
    const [currentTheme, setTheme] = useThemeToggle();
  useEffect(() => {
      setTheme(currentTheme);
  }, [])

  return (
    <AppRouter/>
  );
}

export default App;
