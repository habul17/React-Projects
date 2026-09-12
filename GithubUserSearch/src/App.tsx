import { useState } from "react"

function App() {

  const [username, setUsername] = useState("");

  return <div>
    <h1>Github User Search</h1>
    <input value={username} onChange={(e) => setUsername(e.target.value)} />
    <p>{username}</p>
  </div>

}

export default App
