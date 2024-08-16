import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MyWorks from './components/My_WORKS/Myworks';
import ProjectDetails from './components/PROJECT/ProjectDetails';
import AutomobileProject from './components/PROJECT/AutomobileProject';
import FinanceProject from './components/PROJECT/FinanceProject';
import { ThemeProvider } from './hooks/useTheme';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Main />
                <MyWorks />
              </>
            } />
            <Route path="/my-works/:id" element={<ProjectDetails />} />
            <Route path="/projects/automobile" element={<AutomobileProject />} />
            <Route path="/projects/finance" element={<FinanceProject />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;