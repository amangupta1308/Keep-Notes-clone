import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';

const Note = ({id, title,content, deleteItem}) => {
// const Note = (props) => {

  // const dlt = () => {
  //   props.deleteItem(props.id);
  // }
  return (
    <>
      <div className='note'>
          <h4>{title}</h4> <br/>
          <p>{content}</p>
          <Button className='deletebtn' onClick={() => deleteItem(id)}><DeleteOutlineIcon className='deleteIcon'/></Button>
      </div>
    </>
  );
};

export default Note;
