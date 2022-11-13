import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title : "",
    content: "",
  });

  //Storing the valye typed in the input fields in note so that it can be stored in an array for display
  const inputEvent = (event) => {
      const {value, name} = event.target;
      setNote((preVal) => {
        return {
          ...preVal,
          [name]: value, //Will update the value. eg if we write in title input field then name="title" and [name] means [title] which is a property in the note object so it will get updated
        };
      });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({title: "",content: ""});
  };

  return (
    <>
      <div className='bodyExceptHeader'>
        <div className='main_note' onDoubleClick={() => setExpand(false)}>
            <form>
                {/* can also use && trick */}
                {expand ? <input type="text" value={note.title} name="title" onChange={inputEvent} placeholder='Title' autoComplete='off'/> : null}
                <textarea value={note.content} name="content" onChange={inputEvent} placeholder='Write a note...' onClick={() => setExpand(true)} />
                {expand ? <Button onClick={addEvent}><AddIcon className="plus_sign"/></Button> : null}
            </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
