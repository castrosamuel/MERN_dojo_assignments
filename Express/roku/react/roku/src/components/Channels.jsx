import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Channels = () => {

    const [allChannels, setAllChannels] = useState([])

    useEffect(()=>{

        axios.get("http://localhost:8000/api/channels")
        .then(res=>{
            // console.log(res.data)
            setAllChannels(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (
        <div style={{width:"70%", display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
            {
            allChannels.map((cha, i) => {
            return (
                <div key={i} style={{width:'200px', height:'200px',margin:"5px",border:"1px solid black",backgroundColor:"gray"}}></div>
                // <a key={i} href={cha.url}><img  style={{width:'200px', height:'200px',margin:"3px 5px"}} src={cha.image} alt={cha.channelName}/></a>
                
            )})
            }
        </div>
    );
};

export default Channels;