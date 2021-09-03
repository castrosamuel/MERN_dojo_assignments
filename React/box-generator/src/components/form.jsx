import React, { useState } from  'react';

const Form = (props) => {
    const [boxSize, setBoxSize] = useState("");
    const [color, setColor] = useState("")

    const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {color:color,boxSize: boxSize};
    props.onNewBox(newBox);
    setColor("");
    setBoxSize("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Color: </label> 
                    <input type="text" onChange={ (e)=>setColor(e.target.value) } value={color}/>
                </div>
                <div>
                    <label>Width: </label> 
                    <input type="text" onChange={ (e)=>setBoxSize(e.target.value) } value={boxSize}/>
                </div>
                <input type="submit" value="Add" />
            </form>
            <div style={{width:"950px", margin: "0px auto",display:"flex",flexWrap:"wrap",alignItems:"flex-start"}}>
                {
                props.boxes.map((item, i) => {
                return (
                    <div key = {i} style={{backgroundColor:item.color, width:item.boxSize+"px", height:item.boxSize+"px"}}></div>
                    )})
                }
            </div>
        </div>
    );
};

export default Form;