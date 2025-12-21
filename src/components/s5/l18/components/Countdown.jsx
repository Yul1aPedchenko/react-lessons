import { useState, useRef } from "react";

export const Countdown = () => {
  const [time, setTime] = useState(15);
  const [messege, setMessage] = useState('');
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setMessage('');

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setTimeout(() => alert("Time's up"),100)
          setMessage("Time's up");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTime(15);
    setMessage('');
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedMins = String(mins).padStart(2, "0");
    const formattedSecs = String(secs).padStart(2, "0");
    return `${formattedMins}:${formattedSecs}`;
  };

  return (
    <div>
        <h2>{formatTime(time)}</h2>
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
        {messege && (
            <p>{messege}</p>
        )}
    </div>
  )
};
