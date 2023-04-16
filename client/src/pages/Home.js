import React from 'react'
import TransactionForm from '../components/TransactionForm';
import TransactionsList from "../components/TransactionsList";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';


export default function Home(){
    const [transactions, settransactions] = useState([]);
  const [editTransactions, setEditTransactions] = useState({});


  useEffect(()=>{
    fetchTransactions();
  },[])

  async function fetchTransactions() {
    const token = Cookies.get("token");
    console.log(token);
    const res=await fetch('http://localhost:4000/transaction',{
      method: 'GET',
      headers:{
        Authorization: `Bearer${token}`,
      }
    });
    const { data } = await res.json();
    settransactions(data);
  }
  
  return (
    <>
    <Container>
      <TransactionForm fetchTransactions={fetchTransactions} editTransactions={editTransactions}/>
      <TransactionsList transactions={transactions} fetchTransactions={fetchTransactions} setEditTransactions={setEditTransactions}/>
      </Container>
      <br/>
    </>
  )
}