import React, { useState } from  'react';

const Tabs = (props) => {
    const [listOfTabs, setListOfTabs] = useState([
        {label:"Tab 1",content:"Tab 1 content is showing here."},
        {label:"Tab 2",content:"Tab 2 content is showing here."},
        {label:"Tab 3",content:"Tab 3 content is showing here."}
    ]);
    const [content, setContent] = useState("");

    const changeToTab = e => {
        setContent(e.target.value)
    }

    return(
        <div>
            <br/>
            <div style={{display:'flex',justifyContent:'space-between', width:'600px',margin:'0px auto'}}>
                {
                    listOfTabs.map((item, i) => {
                        return <button style={{backgroundColor:'white', color:'black', padding:'5px 10px',border:'1px solid black', width:'30%'}} key={i} onClick={(e) => changeToTab(e)} value={item.content}>{item.label}</button>
                    })
                }
            </div>
            <br/>
            <div style={{border:'1px',borderColor:'black',borderStyle:'solid', width:'600px', height:'300px',margin:'0px auto'}}>
                {content}
            </div>
        </div>
    )
};

export default Tabs;
