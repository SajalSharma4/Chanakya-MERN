import React from 'react'
import TransactionForm from '../components/TransactionForm';
import TransactionsList from "../components/TransactionsList";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import TransactionChart from '../components/TransactionChart';


export default function Home(){
    const [transactions, settransactions] = useState([]);
  const [editTransactions, setEditTransactions] = useState({});


  useEffect(()=>{
    fetchTransactions();
  },[])

  async function fetchTransactions() {
    const token = Cookies.get("token");
    console.log(token);
    const res=await fetch(`${process.env.REACT_APP_API_URL}/transaction`,{
      method: 'GET',
      headers:{
        Authorization: `Bearer${token}`,
      }
    });
    const { data } = await res.json();
    settransactions(data);
  }
  
  return (
    <Container>
    <TransactionChart/>
    <Container>
      <TransactionForm fetchTransactions={fetchTransactions} editTransactions={editTransactions}/>
      <TransactionsList transactions={transactions} fetchTransactions={fetchTransactions} setEditTransactions={setEditTransactions}/>
      </Container>
    </Container>
  )
}