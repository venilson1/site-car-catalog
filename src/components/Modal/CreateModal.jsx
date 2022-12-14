import { Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { forwardRef, useState } from 'react';
import { createCars } from '../../services/api';
import InputText from '../InputText';
import MuiAlert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function CreateModal({open, handleClose}) {

  const [openSnack, setOpenSnack] = useState(false);
  const [statusError, setStatusError] = useState("");

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const brand = data.get('brand');
    const model = data.get('model');
    const price = data.get('price');
    const urlImage = data.get('urlImage');

    const tokenRecovered = localStorage.getItem("token");
    var token = tokenRecovered.replace(/["]/g, '');

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try{
      await createCars(name, brand, model, price, urlImage, config);
      window.location.reload();
    }
    catch(error){
      setStatusError(statusError);
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
        <Box sx={style} component="form" onSubmit={handleSubmit} noValidate>
          <h1 align="center">Criar um novo produto</h1>
            <InputText id={"name"} label={"Nome"} name={"name"} type={"text"}/>
            <InputText id={"brand"} label={"Marca"} name={"brand"} type={"text"}/>
            <InputText id={"model"} label={"Modelo"} name={"model"} type={"text"}/>
            <InputText id={"price"} label={"Pre??o"} name={"price"} type={"number"}/>
            <InputText id={"urlImage"} label={"Url Imagem"} name={"urlImage"} type={"url"}/>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button
                  type="submit"
                  variant="contained"
                  color='error'
                  sx={{ mt: 3, mb: 2, ml: 2 }}
                  onClick={handleClose}
              >
                  Cancelar
              </Button>
              <Button
                  type="submit"
                  variant="contained"
                  color='success'
                  sx={{ mt: 3, mb: 2 }}
              >
                  Salvar
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