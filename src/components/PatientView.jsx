import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Height } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: '700px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const buttonStyle = {
    backgroundColor: 'orange',
    margin: '4px'
}

export default function PatientView() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h1" component="h2">
            Patient Name
          </Typography>
          <Box sx={{ bgcolor: 'grey.200', paddingBottom: '20px' }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sex <br/>
            DOB <br/>
            Phone <br/>
            Address <br />
                <Button sx={buttonStyle}>New Prescription</Button>
                <Button sx={buttonStyle}>Edit Patient</Button>
                <Button sx={buttonStyle}>Delete</Button>
            </Typography>
          </Box>
          <Box sx={{ bgcolor: 'grey.200', paddingBottom: '20px' }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Medications <br/>
            </Typography>
          </Box>
          <Box sx={{ bgcolor: 'grey.200', paddingBottom: '20px' }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Allergies <br/>
            </Typography>
          </Box>
          <Box sx={{ bgcolor: 'grey.200', paddingBottom: '20px' }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Diagnoses <br/>
            </Typography>
          </Box>
          
        </Box>
      </Modal>
    </div>
  );
}