import './App.css';
import Form from './components/Form';
import Apidisplay from './components/Apidisplay';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {



  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <BrowserRouter>
        <Form/>
        <Switch>
          <Route path="/:item/:id">
            <Apidisplay/>
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
