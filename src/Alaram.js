import React, { useState, useEffect } from "react";
import sound from './wakeup-alarm-tone-21497.mp3';

const Alarm = () => {
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      const audio = new Audio(sound);
      audio.play().catch(error => console.log("Audio play failed:", error)); // Catch errors if autoplay is blocked
      setIsRunning(false); // Stop the timer
    }

    return () => clearInterval(timer); // Cleanup the interval
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`; // Fixed backtick issue
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">1-Minute Timer</h1>
      <div className="text-4xl font-mono bg-white p-4 rounded-lg shadow-lg">
        {formatTime(timeLeft)}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default Alarm;
