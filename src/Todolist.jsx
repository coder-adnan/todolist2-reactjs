import React from 'react';
const Todolist = (props)=>{
    

    return <>
    <i className="fa-solid fa-circle-xmark" onClick={()=>{
        props.onSubmit(props.id)
        
    }}> </i>
    
    <h6>{props.text}</h6>
    
    </>
};
export default Todolist;
{/* <img src="cross.png" alt="Cross"/> */}