/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, memo, useImperativeHandle } from 'react';
import useTimer from "../hooks/useTimer";

const Timer = forwardRef((_, ref) => {

    const {
        seconds,
        minutes,
        handleStart,
        handleStop,
        handleReset,
    } = useTimer();

    useImperativeHandle(ref, () => {
        return {
            handleReset,
            handleStart,
            handleStop
        }
    });

    return (
        <div>{`${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`}</div>
    )

})

export default memo(Timer);
