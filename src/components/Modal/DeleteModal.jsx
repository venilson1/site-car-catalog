import { Snackbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { forwardRef, useState } from 'react';
import { deleteCars } from '../../services/api';
import MuiAlert from '@mui/material/Alert';

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

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function DeleteModal({open, cars, handleClose}) {

  const [openSnack, setOpenSnack] = useState(false);
  const [statusError, setStatusError] = useState("");

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  const handleSubmit = async () => {

    try{

      const tokenRecovered = localStorage.getItem("token");
      var token = tokenRecovered.replace(/["]/g, '');

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await deleteCars(cars.id, config);
      window.location.reload();
    }catch(error){
      setStatusError(error.message);
      handleClickSnack();
    }
  };

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
                  onClick={handleSubmit}
              >
                  Deletar
              </Button>
            </Box>
        </Box>
      </Modal>
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
          {statusError}
        </Alert>
      </Snackbar>
    </div>
  );
}