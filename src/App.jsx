import { useState } from 'react';
import Home from './components/Home';
import MemoryGame from './components/MemoryGame';

const App = () => {

  // state
  const [gridSize, setGridSize] = useState(4);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const updateGridSize = (size) => {
    setGridSize(size);
  }

  const startGame = () => {
    setIsGameStarted(true);
  }

  const startNewGame = () => {
    setIsGameStarted(false);
  }

  return (
    <>
      {
        isGameStarted ?
          <MemoryGame
            gridSize={gridSize}
            startNewGame={startNewGame}
          />
          :
          <Home
            gridSize={gridSize}
            updateGridSize={updateGridSize}
            handleStartGame={startGame}
          />
      }
    </>
  )

}

export default App;
