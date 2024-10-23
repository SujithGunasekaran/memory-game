/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { shuffleArray } from '../utils';
import GameBoard from './GameBoard';
import Timer from './Timer';

const MemoryGame = ({ gridSize, startNewGame }) => {

    // state
    const [numbers, setNumbers] = useState([]);
    const [selectedPair, setSelectedPair] = useState([]);
    const [matchedPair, setMatchedPair] = useState([]);
    const [moves, setMoves] = useState(0);
    const [isGameOver, setGameOver] = useState(false);

    // ref
    const timerId = useRef(null);
    const timerComponentRef = useRef(null);

    const constructNumberArray = () => {
        const totalGrid = gridSize * gridSize;
        const numbersArray = [];
        for (let i = 0; i < (totalGrid / 2); i++) {
            numbersArray.push(i + 1, i + 1);
        }
        const shuffledArray = shuffleArray(numbersArray);
        setNumbers(shuffledArray);
    }

    const restartGame = () => {
        timerComponentRef.current.handleReset();
        constructNumberArray();
        setSelectedPair([]);
        setMatchedPair([]);
        setGameOver(false);
        setMoves(0);
        const timer = setTimeout(() => {
            timerComponentRef.current.handleStart();
            clearTimeout(timer);
        }, 0)
    }

    const handleGridSelect = (gridId) => {
        setSelectedPair((prevState) => [
            ...prevState,
            gridId
        ]);
    }

    const clearSelectedPair = () => {
        setSelectedPair([]);
    }

    const compareSelectedPair = () => {
        const [pair1, pair2] = selectedPair;
        setMoves((prevState) => prevState + 1);
        if (numbers[pair1] === numbers[pair2]) {
            setMatchedPair((prevState) => [
                ...prevState,
                pair1, pair2
            ]);
            clearSelectedPair();
        } else {
            timerId.current = setTimeout(() => {
                clearSelectedPair();
            }, 800);
        }
        if (matchedPair.length === (gridSize * gridSize) - 2) {
            setGameOver(true);
            timerComponentRef.current.handleStop();
        }
    }

    useEffect(() => {
        timerComponentRef.current.handleStart();
        constructNumberArray();
    }, [])

    useEffect(() => {
        if (selectedPair.length === 2) {
            compareSelectedPair();
        }
        return () => {
            clearTimeout(timerId.current);
            timerId.current = null;
        }
    }, [selectedPair])

    return (
        <div className='game-container'>
            <div className='game-header-container'>
                <div className='game-header-item'>
                    <Timer
                        isGameOver={isGameOver}
                        ref={timerComponentRef}
                    />
                </div>
                {
                    isGameOver &&
                    <div className='game-header-item'>
                        You Won
                    </div>
                }
                <div className='game-header-item'>
                    Moves: {moves}
                </div>
            </div>
            <GameBoard
                gridSize={gridSize}
                numbers={numbers}
                selectedPair={selectedPair}
                matchedPair={matchedPair}
                handleGridSelect={handleGridSelect}
            />
            <div className='game-footer-container'>
                <button
                    className='game-footer-btn'
                    onClick={restartGame}
                >
                    Restart
                </button>
                <button
                    className='game-footer-btn'
                    onClick={startNewGame}
                >
                    New Game
                </button>
            </div>
        </div>
    )

}

export default MemoryGame;
