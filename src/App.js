import './App.css';
import React, {useState} from "react";
import Todolist from './Todolist';

function App() {
  const[inputList , setInputList] = useState("");
  const[Items , setItems] = useState([]);
   const itemEvent = (event) =>{
     setInputList(event.target.value);
     
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList('');
  };
  const deleteItem=(id)=>{
    console.log("Deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrayElem , index)=>{
        return index!==id;
      })
    })
}

  return(
    <>
    <div className="mainContainer">
    <div className="todoList">
      <div className="inputFields">
    <input  type="text" 
    placeholder="Enter Item to Add"
    value={inputList}
    onChange={itemEvent}
    />
    <button  
    onClick={listOfItems}
    >+</button>
    </div>
    <div className="showList">
      <h1>{Items.map((itemval, index)=>{
        // return <h6>{itemval}</h6>
        return <Todolist
        text ={itemval}
        key={index}
        id={index}
        onSubmit={deleteItem}
        />
      })}</h1>
    </div>
    </div>

    </div>
    </>
  )
}

export default App;
