import { Fade, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputText from '../InputText';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 410,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function DeleteModal({open, handleOpen, handleClose}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja Realmente deletar o produto ?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
                  type="submit"
                  variant="contained"
                  color='error'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClose}
              >
                  Deletar
              </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}