import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect, useState } from "react";

const InitialForm={
  amount:0,
  description: "",
  date: "",
}

export default function TransactionForm({fetchTransactions}) {

  const [form, setform] = useState(InitialForm);

  function handleChange(e){
    setform({...form,[e.target.name]:e.target.value});
  }

  function handleDate(newValue) {
    setform({ ...form, date: newValue });
  }


  async function handleSubmit(e){
    e.preventDefault();
    const res=await fetch('http://localhost:4000/transaction',{
      method: 'POST',
      body:JSON.stringify(form),
      headers:{
        'content-type': 'application/json',
      }
    });
    if(res.ok){
      setform(InitialForm);
    fetchTransactions();
    }
  }

  return (
    <Card sx={{ minWidth: 275 ,marginTop:10}}>
      <CardContent>
      <Typography sx={{marginTop:5}}variant="h6">Add New Transaction</Typography>
        <form onSubmit={handleSubmit} sx={{align: 'center'}}>
        <TextField sx={{marginRight:5, marginBottom:5}}  id="outlined-basic" name="amount" label="Amount" value={form.amount}  onChange={handleChange} variant="outlined" />
        <TextField sx={{marginRight:5, marginBottom:5}}  id="outlined-basic" name="description" label="Description" value={form.description} onChange={handleChange} variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              value={form.date}
              sx={{ marginRight: 5 ,marginBottom:5, borderColor:"black"}} 
              onChange={handleDate}
              renderInput={(params) => (
                <TextField  {...params}  error={false}/>
              )}
            />
          </LocalizationProvider>


          <Button variant="contained" type="submit" size="large" sx={{fontSize:20}}>Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}