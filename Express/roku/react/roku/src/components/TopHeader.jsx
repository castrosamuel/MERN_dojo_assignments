import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";


const TopHeader = () => {
    const [time,setTime]=useState("");
    
    useEffect(()=>{
        console.log("Hello world")
        const timer = setInterval(()=>{
            
            setTime(new Date());
        }, 60 * 1000);
        timer()
        return () => {
            clearInterval(timer);
        }
        
    },[])

    return (
        <nav>
            <h1><Link to="/">Roku</Link></h1>
            <div>
                {time} | <Link to="/options">Options</Link> <span style={{fontSize:"12px"}}>*</span>
            </div>
        </nav>
    );
};

export default TopHeader;