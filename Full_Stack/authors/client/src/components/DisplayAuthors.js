import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';
const DisplayAuthors = (props) => {

    const {authors, removeFromDom} = props;

    return (
        <div>
            <Link to="/new">add an author</Link>
            <p>We have quotes by:</p>
            <table className="authorsTable">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    authors.map((author, i)=> {
                    return <tr key={i}>
                        <td>{author.name}</td>
                        <td><Link to={"/edit/" + author._id}>Edit</Link> <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayAuthors;