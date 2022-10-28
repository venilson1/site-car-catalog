import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CssBaseline } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
  return (
    <Box >
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', paddingY: 2 }}>
            <Button variant="contained" color="success" endIcon={<AddIcon />}>Criar</Button>
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
                <StyledTableRow key={1}>
                    <StyledTableCell component="th" scope="row">{'row.name'}</StyledTableCell>
                    <StyledTableCell align="right"><img height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" /></StyledTableCell>
                    <StyledTableCell align="right">{'row.calories'}</StyledTableCell>
                    <StyledTableCell align="right">{'row.fat'}</StyledTableCell>
                    <StyledTableCell align="right">{'row.carbs'}</StyledTableCell>
                    <StyledTableCell align="right">
                        <Button variant="contained" color="warning" endIcon={<EditIcon/>}>Editar</Button>    
                    </StyledTableCell>  
                    <StyledTableCell>
                        <Button variant="contained" color="error" endIcon={<DeleteIcon/>}>Deletar</Button>    
                    </StyledTableCell>      
                </StyledTableRow>
            }
            </TableBody>
        </Table>
        </TableContainer>
    </Box>

  );
}