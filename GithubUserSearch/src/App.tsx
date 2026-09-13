import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [username, setUsername] = useState("");


  useEffect(() => {
    if (username.trim() === "") return;
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => console.log(response.data))
  }, [username])

  console.log("App ran");


  return <div>
    <h1>Github User Search</h1>
    <input value={username} onChange={(e) => setUsername(e.target.value)} />
    <p>{username}</p>
  </div>

}

export default App
