import {useState} from 'react';
export default function useVisualMode(newMode) {
  const [mode, setMode] = useState(newMode);
  const [history, setHistory] = useState([newMode]); 
  const transition = function (modeChange, boolean = false) {
    setMode (modeChange);
    let histArray = history;
    if (boolean) {
      histArray.pop();
    }
    setHistory([...histArray, modeChange]);
    }
    const back = function () {
      if(history.length > 1){
        let value = history[history.length - 2]
        setHistory(prev => {
          prev.pop()
          return prev; 
      })
      setMode(value);
    }
  }
  return {
    mode,
    transition,
    back
  }
}