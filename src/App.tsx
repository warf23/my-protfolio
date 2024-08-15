import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ThemeProvider } from './hooks/useTheme';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;