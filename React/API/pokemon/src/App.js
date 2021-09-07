import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
function App() {

  const [allPokemon, setAllPokemons] = useState([])


  const clickHandler = () => {
      console.log("clicked")
      fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res=>{
          console.log("the response look like this")
          console.log(res)
          return res.json()
      })
      .then(res=>{
          setAllPokemons(res.results)
      })
      .catch(err=>{
          console.log(err)
      })
  }

  return (
    <div className="App">
      <div>
        <button onClick={clickHandler} className="btn btn-success">Fetch Pokemon</button>
        
        <ul style={{width:'150px', margin:'20px auto'}}>
        {
            allPokemon.map((pokemon,idx)=>{
            return <li key={idx}>{pokemon.name}</li>
            })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
