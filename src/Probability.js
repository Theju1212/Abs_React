import React, { useState, useEffect } from "react";

export default function CoinFlip() {
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [totalFlips, setTotalFlips] = useState(0);
  const [headsProbability, setHeadsProbability] = useState(0);
  const [tailsProbability, setTailsProbability] = useState(0);

  const flipCoin = () => {
    const isHeads = Math.random() < 0.5;
    setTotalFlips((prev) => prev + 1);
    if (isHeads) {
      setHeadsCount((prev) => prev + 1);
    } else {
      setTailsCount((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setHeadsCount(0);
    setTailsCount(0);
    setTotalFlips(0);
    setHeadsProbability(0);
    setTailsProbability(0);
  };

  useEffect(() => {
    if (totalFlips > 0) {
      setHeadsProbability((headsCount / totalFlips).toFixed(2));
      setTailsProbability((tailsCount / totalFlips).toFixed(2));
    }
  }, [headsCount, tailsCount, totalFlips]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Coin Flip Probability</h2>
      <button onClick={flipCoin}>Flip Coin</button>
      <button onClick={resetGame}>Reset</button>
      <p>Total Flips: {totalFlips}</p>
      <p>Heads: {headsCount} ({headsProbability})</p>
      <p>Tails: {tailsCount} ({tailsProbability})</p>
    </div>
  );
}
