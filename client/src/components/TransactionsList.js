import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from "@mui/material/Typography";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

export default function TransactionsList({transactions,fetchTransactions,setEditTransactions}) {

  async function remove(_id){
    if(!window.confirm("Are you sure?")) return;
    const res=await fetch(`http://localhost:4000/transaction/${_id}`,{
      method: 'DELETE',
    });
    if(res.ok){
      fetchTransactions();
      window.alert("Deleted Successfully");
    }
  }

  function formatDate(date){
    return dayjs(date).format("DD MMM, YYYY")
  }

  return (
    <>
    <Typography variant="h6" sx={{marginTop:10}}>
      List of Transactions
    </Typography>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.amount}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{formatDate(row.date)}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" component="label" onClick={()=> setEditTransactions(row)}>
                  <BorderColorIcon/>
                </IconButton>
                <IconButton color="warning" component="label" onClick={()=>remove(row._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}