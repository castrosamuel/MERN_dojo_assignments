import './App.css';
import styles from './styles/module.css';
import {BrowserRouter,Link, Switch, Route} from "react-router-dom";
import TopHeader from './components/TopHeader';
import Menu from './components/Menu';
import Channels from './components/Channels';
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <TopHeader/>
        <Switch>
          <Route exact path="/">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Menu/>
                <Channels/>
            </div>
          </Route>
          <Route exact path="/options">
            <h1>Options...</h1>
          </Route>
          <Route exact path="/feature">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Menu/>
              <h1>Feature...</h1>
            </div>
          </Route>
          <Route exact path="/feed">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Menu/>
              <h1>Feed...</h1>
            </div>
          </Route>
          <Route exact path="/Search">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Menu/>
              <h1>Search...</h1>
            </div>
          </Route>
          <Route exact path="/streaming">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Menu/>
              <h1>Streaming...</h1>
            </div>
          </Route>
          <Route exact path="/settings">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <Menu/>
              <h1>Settings</h1>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
