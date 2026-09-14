import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (username.trim() === "") return;

    let id = setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`)
        .then(response => setUser(response.data))
        .catch(error => console.log("failed:", error.message))
    }, 500)

    return () => {
      clearTimeout(id);
    }
  }, [username])

  return <div>
    <h1>Github User Search</h1>
    <input value={username} onChange={(e) => setUsername(e.target.value)} />

    {user && <div>
      <img src={user.avatar_url} width={150} />
      <h2>{user.name}</h2>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <p>{user.public_repos} public repos</p>
    </div>}
  </div>

}

export default App
