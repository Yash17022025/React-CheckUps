import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import {deleteTodo } from '../features/todosSlice'
// import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({todo, open, setOpen}) => {
  const dispatch = useDispatch();

  return (
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{backdropFilter: "blur(5px)"}}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to delete this to-do?
          </Typography>
          <button onClick={()=> {setOpen(false)}}>close</button>
          <button onClick={() => {dispatch(deleteTodo(todo.id)); setOpen(false) }}>Confirm Delete</button>
        </Box>
      </Modal>
  );
};

export default DeleteModal;