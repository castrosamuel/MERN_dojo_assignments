import './App.css';
import React from "react";
import { useParams } from "react-router"
import {BrowserRouter,Link, Switch, Route} from "react-router-dom";

const Home = () => {
  return (
    <h1>Welcome</h1>
  );
}

const Word = () => {
  const { text, txtColor, bgColor } = useParams();
  if(isNaN(text)){
    return (
      <center><h1 style={{backgroundColor:bgColor, color:txtColor}}>The word is: { text }</h1></center>
    );
  } else{
    return (
      <center><h1 style={{backgroundColor:bgColor, color:txtColor}}>The Number is: { text }</h1></center>
    )
  }
}

function App() {

  return (
    <BrowserRouter>
    <center>
      <p>
        <Link to="/home">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/hello">Hello</Link>
        &nbsp;|&nbsp;
        <Link to="/5">5</Link>
        &nbsp;|&nbsp;
        <Link to="/hello/blue/lightblue">text styling</Link>
      </p>
      </center>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route exact  path="/:text/:txtColor?/:bgColor?" component={Word} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
