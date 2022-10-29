import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Pagination, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import CreateModal from './Modal/CreateModal';
import EditModal from './Modal/EditModal';
import DeleteModal from './Modal/DeleteModal';
import { getCars } from '../services/api';
import FormatPrice from '../utils/FormatPrice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {

    const [openCreate, setOpenCreate] = useState(false);
    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [cars, setCars] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);


    const handlePage = (event, value) => {
      setPage(value);
    };


    useEffect(() => {
      (async () => {
          const response = await getCars(page - 1);
          setCars(response.data.data);
          setCountPage(response.data.totalPage);
          setLoading(false);

      })();
  }, [page]);

  return (
    <Box >
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', paddingY: 2 }}>
            <Button onClick={handleOpenCreate} variant="contained" color="success" endIcon={<AddIcon />}>Criar</Button>
        </Box>
        <TableContainer component={Paper}>

        <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell align="right">Imagem</StyledTableCell>
                <StyledTableCell align="right">Modelo</StyledTableCell>
                <StyledTableCell align="right">Marca</StyledTableCell>
                <StyledTableCell align="right">Preço</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
              cars.map(el => {
                return (
                  <StyledTableRow key={el.id}>
                  <StyledTableCell component="th" scope="row">{el.name}</StyledTableCell>
                  <StyledTableCell align="right"><img height={40} src={el.urlImage} /></StyledTableCell>
                  <StyledTableCell align="right">{el.model}</StyledTableCell>
                  <StyledTableCell align="right">{el.brand}</StyledTableCell>
                  <StyledTableCell align="right">{FormatPrice(el.price)}</StyledTableCell>
                  <StyledTableCell align="right">
                      <Button variant="contained" onClick={handleOpenEdit} color="warning" endIcon={<EditIcon/>}>Editar</Button>    
                  </StyledTableCell>  
                  <StyledTableCell>
                      <Button variant="contained" onClick={handleOpenDelete} color="error" endIcon={<DeleteIcon/>}>Deletar</Button>    
                  </StyledTableCell>      
                  </StyledTableRow>
                )
              })
            }
            </TableBody>
        </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={2}>
              <Pagination count={countPage + 1} page={page} color="secondary" onChange={handlePage} sx={{ p: 4 }} />
          </Stack>
        </Box>
        <CreateModal open={openCreate} handleOpen={handleOpenCreate} handleClose={handleCloseCreate} />
        <EditModal open={openEdit} handleOpen={handleOpenEdit} handleClose={handleCloseEdit} />
        <DeleteModal open={openDelete} handleOpen={handleOpenDelete} handleClose={handleCloseDelete} />
    </Box>

  );
}