import React, { useState } from  'react';

const Tabs = (props) => {
    // Your code goes here
    const [listOfTabs, setListOfTabs] = useState([]);
    const [tab, setTab] = useState({label:"",content:""});

    const changeToTab = e => {
        console.log("Pressed", e.target.value)
    }

    return(
        <div>
            <h1>Hello World</h1>
            <div className="">
                <button onClick={(e) => changeToTab(e)} value="Tab 1">Tab 1</button>
                <button onClick={(e) => changeToTab(e)} value="Tab 2">Tab 2</button>
            </div>
        </div>
    )
};

export default Tabs;
