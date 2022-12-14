import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import PageHeader from './components/PageHeader/PageHeader';
import VideoGamesPage from './pages/VideoGamesPage/VideoGamesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import GameProfile from './components/GameProfile/GameProfile';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [isClicked, setIsClicked] = useState(false)
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    setIsClicked(isClicked => !isClicked);
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Router>
        <PageHeader 
          theme={theme} 
          toggleTheme={toggleTheme}
          isClicked={isClicked} />
        <Routes>
          <Route path='/' element={<HomePage theme={theme} />} />
          <Route path='/games' element={<VideoGamesPage theme={theme} />} />
          <Route path='/profile' element={<ProfilePage theme={theme} />} />
          <Route path='/login' element={<LoginPage theme={theme} />} />
          <Route path='/register' element={<RegisterPage theme={theme} />} />
          <Route path='/profile/:id' element={<GameProfile theme={theme} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;