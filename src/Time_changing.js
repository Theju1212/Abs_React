import React, { useState, useEffect } from 'react';

export default function Time_changing() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); 
  const [alarmOn, setAlarmOn] = useState(false);
  const sound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); 

  useEffect(() => {
    let interval;
    
    if (timeLeft > 0 && alarmOn) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); 
    } else if (timeLeft === 0) {
      sound.play(); 
      setAlarmOn(false); 
    }
    return () => clearInterval(interval);
  }, [timeLeft, alarmOn]);

  const toggleAlarm = () => {
    setAlarmOn((prev) => !prev); 
    if (timeLeft === 0) {
      setTimeLeft(5 * 60); 
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Timer with Ring and Sound</h1>
      <p>
        Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
      </p>
      <button onClick={toggleAlarm}>
        {alarmOn ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
};
