import { useState } from "react";
export default function useVisualMode(newMode) {
  const [mode, setMode] = useState(newMode);
  const [history, setHistory] = useState([newMode]);
  //changes to the mode in the argument and appends new mode to history
  //true boolean value replaces last member in history array with new mode
  const transition = function (modeChange, boolean = false) {
    setMode(modeChange);
    setHistory((prev) => {
      let histArray = prev;
      if (boolean) {
        histArray.pop();
      }
      return [...histArray, modeChange];
    });
  };
  //return to previous mode
  const back = function () {
    if (history.length > 1) {
      let newHistory = [...history];
      newHistory.pop();
      let newMode = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setMode(newMode);
    }
  };
  return {
    mode,
    transition,
    back,
  };
}
