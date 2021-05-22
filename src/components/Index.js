import React, { useState } from 'react';
import TodoList from './TodoList'; 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import ReplayIcon from '@material-ui/icons/Replay';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import './styles.css'

function Index() {
  const [inputList, setInput]=useState("");
  const [Items,setItems]=useState([]);
  const [editable,setEdit]=useState(false);


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
  setEdit(true)
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
    <div className="refreshdiv" onClick={refreshButton} >
    <ReplayIcon /> <span>refresh items</span>
    </div>
    <div className="resetdiv" onClick={resetButton}>
    <RefreshIcon  /> <span>reset all items</span>
    </div>
     <div className="hashtagdiv" onClick={hashButton} >
     <LabelImportantIcon /><span>hashtag items</span>
     </div>
    
    </div>
      <div className="center_div">
      <div><h1>To do List</h1></div>
        <input type="text" placeholder="add a item" onChange={itemEvent} value={inputList}/>
        <button onClick={listofItem}>
        <AddCircleIcon/>
        </button>

        <ul>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval,index)=>{  
        if(itemval.length>1){
        if(itemval[0]==='#') 
        return <TodoList key={index} textColor="#ff006e" id={index} onSelect={deleteItem} onSelectItem={editItems} text={itemval} edit={editable} />;
        else
         return <TodoList key={index} textColor="black" id={index} onSelect={deleteItem}  onSelectItem={editItems} text={itemval} edit={editable} />;
        }})}
        </ul>
      </div>

    </div>
    </>
  );
}

export default Index;
