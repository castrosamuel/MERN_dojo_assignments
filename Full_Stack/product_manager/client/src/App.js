import './App.css';
import { useState } from 'react';
import DisplayAll from './components/DisplayAll'
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';
import EditForm from './components/EditForm';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {

  const [submitted, setSubmitted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Product Manager</h1>
          <Form submitted = {submitted} setSubmitted={setSubmitted}/>
          <br/>
          <hr/>
          <br/>
          <DisplayAll submitted= {submitted} />
        </Route>
        <Route path="/product/:id">
          <DisplayOne/>
        </Route>
        <Route path="/:id/edit">
          <EditForm/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
