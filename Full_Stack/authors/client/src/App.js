import './App.css';
import './style.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DisplayAuthors from './components/DisplayAuthors';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
    .then(res=>{
        setAuthors(res.data.results)
        setLoaded(true);
    })
    .catch(err=>{
        console.log(err)
    })

  },[authors]);


  const createAuthor = author => {
    axios.post('http://localhost:8000/api/new/author', author)
        .then(res=>{
            if(res.data.err){
              setValidationErrors(res.data.err.errors)
              console.log(res.data.err.errors)
            } else {
              setAuthors([...authors, res.data.results]);
              setValidationErrors({})
            }
        })
  }

  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id !== authorId));
}

  return (
    <BrowserRouter>
      <div className="App container">
      <h1>Favorite Authors</h1>
        <Switch>

          <Route exact path="/">
          {loaded && <DisplayAuthors authors = {authors} removeFromDom={removeFromDom}/>}
          </Route>

          <Route exact path="/new">
            <AuthorForm onSubmitProp={createAuthor} initialName="" validationErrors = {validationErrors}/>
          </Route>

          <Route path="/edit/:id">
            <UpdateAuthor/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
