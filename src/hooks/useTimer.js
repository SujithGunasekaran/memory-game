import { useState, useEffect } from 'react';

const SECONDS = 60;
const MINUTES = SECONDS * 60;

const useTimer = () => {

    const [isStarted, setStarted] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    const handleStart = () => {
        setStarted(true);
        if (!isRunning) {
            setIsRunning(true);
        }
    }

    const handleReset = () => {
        setStarted(false);
        setIsRunning(false);
        setTime(0);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    useEffect(() => {
        let timerId = null;
        if (isRunning) {
            timerId = setInterval(() => {
                setTime((prevState) => prevState + 1);
            }, 1000);
        }
        return () => clearInterval(timerId);
    }, [isRunning]);

    return {
        seconds: (Math.floor(time % SECONDS)).toString(),
        minutes: (Math.floor((time % MINUTES) / SECONDS)).toString(),
        isStarted,
        isRunning,
        handleStart,
        handleStop,
        handleReset,
    }

}

export default useTimer;
