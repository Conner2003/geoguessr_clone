import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GamePage from './GamePage';

function App() {
  const [username, setUsername] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [language, setLanguage] = useState('zh'); // 'zh' for 中文, 'en' for English

  const handleStartGame = () => {
    if (username.trim() === '') {
      setAlertVisible(true);
    } else {
      setStartGame(true);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  if (startGame) {
    return <GamePage language={language} />;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        {language === 'zh' ? '歡迎來到 GeoGuessr Clone!' : 'Welcome to GeoGuessr Clone!'}
      </h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          {language === 'zh' ? '輸入使用者名稱:' : 'Enter your username:'}
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder={language === 'zh' ? '輸入您的名稱' : 'Enter your name'}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {alertVisible && (
        <div className="alert alert-danger" role="alert">
          {language === 'zh' ? '使用者名稱不能為空！' : 'Username cannot be empty!'}
        </div>
      )}

      <button className="btn btn-primary w-100 mt-3" onClick={handleStartGame}>
        {language === 'zh' ? '開始遊戲' : 'Start Game'}
      </button>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <span className="toggle-text">{language === 'zh' ? '中文' : 'English'}</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleLanguage}></input>
          <span className="slider round"></span>
        </label>
        <span className="toggle-text">{language === 'zh' ? 'English' : '中文'}</span>
      </div>
    </div>
  );
}

export default App;
