import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [addItem, setAddItem] = useState([]); //addItem is array of objects where object is note
  const addNote = (note) => {
    setAddItem([...addItem, note]);
    // OR,
    // setAddItem((preVal)=>{
    //   return [...preVal, note];
    // });
  };

  const deleteNote = (id) => {
    setAddItem((preVal)=>
      preVal.filter((cval,index)=>{
        return index!==id;
      })
    );
  };
  
  return (
    <>
      <Header/>

      <CreateNote passNote={addNote}/>
      <div className='notesall'>
      {addItem.map((cval,index)=>{
        return <Note key={index} id={index} deleteItem={deleteNote} {...cval}/>
      })}
      </div>
      <Footer/>
    </>
  );
};

export default App;
