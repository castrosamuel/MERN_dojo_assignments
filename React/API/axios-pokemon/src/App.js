import './App.css';
import axios from 'axios'
import React, {useState} from 'react'
function App() {

  const [allPokemons, setAllPokemons] = useState([])


const clickHandler = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res=>{
        setAllPokemons(res.data.results)
    })
    .catch(err=>{
        console.log(err)
    })
}

  return (
    <div className="App">
      <button onClick={clickHandler} className="btn btn-success">Fetch Pokemon</button>
    <ul style={{width:'150px', margin:'20px auto'}}>
    {
        allPokemons.map((pokemon,idx)=>{
        return <li key={idx}>{pokemon.name}</li>
        })
    }
    </ul>
    </div>
  );
}

export default App;
