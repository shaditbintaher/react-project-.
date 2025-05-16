import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const emojis = ['😀', '😎', '🚀', '🍕', '🎮', '💡', '🐱‍👤', '🧠', '🔥', '🎉'];

function App() {
  const [emoji, setEmoji] = useState('😀');

  const getRandomEmoji = () => {
    const random = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[random]);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>🎲 Random Emoji Generator</h1>
        <div style={{ fontSize: '100px', margin: '20px' }}>{emoji}</div>
        <button onClick={getRandomEmoji} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Generate Emoji
        </button>
      </div>
    </>
  );
}

export default App;