import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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

export default function EditModal({open, handleOpen, handleClose}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const brand = data.get('brand');
    const model = data.get('model');
    const price = data.get('price');
    const urlImage = data.get('urlImage');
    console.log({ name, brand, model, price, urlImage });
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
            <InputText id={"name"} label={"Nome"} name={"name"} type={"text"}/>
            <InputText id={"brand"} label={"Marca"} name={"brand"} type={"text"}/>
            <InputText id={"model"} label={"Modelo"} name={"model"} type={"text"}/>
            <InputText id={"price"} label={"Preço"} name={"price"} type={"number"}/>
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
    </div>
  );
}