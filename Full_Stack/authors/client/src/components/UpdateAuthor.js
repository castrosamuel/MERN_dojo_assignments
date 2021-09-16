import React, {useState, useEffect}  from 'react';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UpdateAuthor = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory()

    useEffect(() => {
        
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data.results);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/update/author/' + id, author)
        .then(res => console.log(res));
        history.push("/");
    }

    return (
        <div>
            <h1>Update</h1>
            {loaded && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name}/>}
        </div>
    );
};

export default UpdateAuthor;