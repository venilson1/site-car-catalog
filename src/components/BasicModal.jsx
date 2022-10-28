import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import InputText from './InputText';

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

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    console.log("submit", { username, password });
};

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit} noValidate>
            <InputText id={"name"} label={"Nome"} name={"name"}/>
            <InputText id={"brand"} label={"Marca"} name={"brand"}/>
            <InputText id={"model"} label={"Modelo"} name={"model"}/>
            <InputText id={"price"} label={"Preço"} name={"price"}/>
            <InputText id={"url"} label={"Url Imagem"} name={"url"}/>
            <Button
                type="submit"
                variant="contained"
                color='success'
                sx={{ mt: 3, mb: 2 }}
            >
                Salvar
            </Button>
        </Box>
      </Modal>
    </div>
  );
}