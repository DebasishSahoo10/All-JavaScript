import "./styles.css";
import { useRef } from "react";

export default function App() {
  let timerID = useRef(null);
  const debounceCall = () => {
    clearTimeout(timerID.current);
    timerID.current = setTimeout(() => console.log("searched"), 500);
  };

  let throttleFlag = useRef(true);
  const throttleCall = () => {
    if (throttleFlag.current) {
      console.log("Called");
      throttleFlag.current = false;
      setTimeout(() => {
        throttleFlag.current = true;
        console.log("Called");
      }, 2000);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" onChange={() => debounceCall()} />
      <input type="text" onChange={() => throttleCall()} />
    </div>
  );
}
