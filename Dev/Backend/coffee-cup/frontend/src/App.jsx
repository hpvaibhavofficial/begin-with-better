import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) =>{setJokes(res.data)})
    .catch((err) => console.log(err));
  },[])

  return (
    <div className="app">
      <h1>Jokes</h1>
      {
        jokes.map((joke)=>(
          <div key = {joke.id} className="card">
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      } 
    </div>
  );
}

export default App;
