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
        // hist =[first, second, third]
        // mode = third
        // hist= [first, second]
        // mode = second
        //let value = history[history.length - 2]
        let newHistory = [...history]
        newHistory.pop();
        let newMode = newHistory[newHistory.length -1]
        setHistory(newHistory) 
        setMode(newMode);
      }
    }
    return {
      mode,
      transition,
      back
   }
}