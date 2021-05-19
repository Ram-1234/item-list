import React, { useState } from 'react';
import TodoList from './TodoList'; 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './styles.css'

function Index() {
  const [inputList, setInput]=useState("");
  const [Items,setItems]=useState([]);
  //const [Items1,setItems1]=useState([]);

  const  itemEvent=(event)=>{ 
    setInput(event.target.value);
  };

  const listofItem=()=>{

    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
   setInput("");
  };

  const deleteItem=(id)=>{
    //console.log("delete");
    setItems((olditems)=>{
      return olditems.filter((arrele,index)=>{
          return index !==id;
      })
    })
}

const editItems=(id)=>{
  document.getElementById("id").style.contentEditable="true"
}

const resetButton=()=>{
  setItems([])
}


const refreshButton=()=>{
  setItems(Items)
}

const hashButton=()=>{
 const newarr= Items.filter(val=> val[0]==='#')
 setItems(newarr)
}

  return (
    <>
    <div className="main_div">
    <div className="buttonsdiv">
    <button className="refreshbtn" onClick={refreshButton}>refresh</button>
    <button className="resetbtn" onClick={resetButton}>reset</button><br/>
    <button className="hashtagbtn" onClick={hashButton}>hashtag</button>
    </div>
      <div className="center_div">
      <div><h1>Item List</h1></div>
        <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}/>
        <button onClick={listofItem}>
        <AddCircleIcon/>
        </button>

        <ul>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval,index)=>{  
        if(itemval[0]==='#') 
        return <TodoList key={index} textColor="#ff006e" id={index} onSelect={deleteItem} onSelectItem={editItems} text={itemval} />;
        else
         return <TodoList key={index} textColor="black" id={index} onSelect={deleteItem}  onSelectItem={editItems} text={itemval} />;
          })}
        </ul>
      </div>

    </div>
    </>
  );
}

export default Index;
