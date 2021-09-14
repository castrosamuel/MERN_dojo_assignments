import './App.css';
import DisplayAll from './components/DisplayAll'
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';
import {BrowserRouter,Link, Switch, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Product Manager</h1>
          <Form/>
          <br/>
          <hr/>
          <br/>
          <DisplayAll />
        </Route>
        <Route path="/product/:id">
          <DisplayOne/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
