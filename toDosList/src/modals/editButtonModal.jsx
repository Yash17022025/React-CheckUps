import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const ConfirmModal = ({ open, onConfirm, onCancel }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="save-modal-title"
      aria-describedby="save-modal-description"
      style={{backdropFilter: "blur(5px)"}}
    >
      <Box sx={style}>
        <Typography id="save-modal-title" variant="h6" component="h2">
          Confirmation
        </Typography>
        <Typography id="save-modal-description" sx={{ mt: 2 }}>
          Do you want to Save this updation?
        </Typography>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm Save</button>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
