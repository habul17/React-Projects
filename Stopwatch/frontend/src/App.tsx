import { useState, useRef } from "react"


function App() {

  const [seconds, setSeconds] = useState(0);
  let interval = useRef(0)

  function startClock() {
    interval.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000)
  }

  function stopClock() {
    clearInterval(interval.current);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", flexDirection: "column" }}>
      <div style={{ fontSize: 100 }}>
        {seconds}s
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 16 }}>
        <button style={{ backgroundColor: "black", color: "white", cursor: "pointer", padding: "16px", width: "100px", margin: "24px", border: "1px solid white", borderRadius: "12px" }} onClick={startClock}>Start</button>
        <button style={{ backgroundColor: "black", color: "white", cursor: "pointer", padding: "16px", width: "100px", margin: "24px", border: "1px solid white", borderRadius: "12px" }} onClick={stopClock}>Stop</button>
      </div>
    </div>
  )
}

export default App
