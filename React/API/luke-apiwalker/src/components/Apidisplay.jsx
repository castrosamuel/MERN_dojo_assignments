import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';

const Apidisplay = (props) => {
    const { item, id } = useParams();
    const [responseData, setResponseData] = useState([]);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${item}/${id}`)
            .then(res=>{setResponseData(res.data)
                setHasError(false)
            })
            .catch(err=>{setHasError(true)})
    },[item, id])

    const info = ()=>{
        if(hasError){
            return (
            <>
            <h1>These aren't the droids you're looking for</h1>
            <img style={{width:"200px"}} src="https://cdn.mos.cms.futurecdn.net/hrxPKa5MUbRixfxM3UQ9Fo.jpg" alt="Obi-Wan Kenobi"/>
            </>
            )
        }else if (item === 'planets') {
            return (
                <div>
                    <h1>{responseData.name}</h1>
                    <b>Climate:</b> {responseData.climate}<br/>
                    <b>Terrain:</b> {responseData.terrain}<br/>
                    <b>Surface Water:</b> {responseData.surface_water}<br/>
                    <b>Population:</b> {responseData.population}
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{responseData.name}</h1>
                    <b>Height:</b> {responseData.height}<br/>
                    <b>Mass:</b> {responseData.mass}<br/>
                    <b>Hair Color:</b> {responseData.hair_color}<br/>
                    <b>Skin Color:</b> {responseData.skin_color}
                </div>
            )
        }

    }

	return(
        
        <div className="container">
            
            {info()}
        </div>
        
    )
};

export default Apidisplay;