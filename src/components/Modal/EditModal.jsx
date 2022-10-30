import { Alert, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { updateCars } from '../../services/api';
import InputText from '../InputText';

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

export default function EditModal({open, cars, handleClose}) {

  const [openSnack, setOpenSnack] = useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const brand = data.get('brand');
    const model = data.get('model');
    const price = data.get('price');
    const urlImage = data.get('urlImage');
    const id = cars.id;

    try{
      await updateCars(id, name, brand, model, price, urlImage);
      handleClose();
      handleClickSnack();
    }
    catch{
      alert("error")
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
          <h1 align="center">Editar produto</h1>
            <InputText id={"name"} label={"Nome"} name={"name"} type={"text"} value={cars.name}/>
            <InputText id={"brand"} label={"Marca"} name={"brand"} type={"text"} value={cars.brand}/>
            <InputText id={"model"} label={"Modelo"} name={"model"} type={"text"} value={cars.model}/>
            <InputText id={"price"} label={"Preço"} name={"price"} type={"number"} value={cars.price}/>
            <InputText id={"urlImage"} label={"Url Imagem"} name={"urlImage"} type={"url"} value={cars.urlImage}/>
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
                  Atualizar
              </Button>
            </Box>
        </Box>
      </Modal>
      <Snackbar open={openSnack} autoHideDuration={1900} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          Atualizado com Sucesso
        </Alert>
      </Snackbar>
    </div>
  );
}