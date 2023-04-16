import React from 'react'
import TransactionForm from '../components/TransactionForm';
import TransactionsList from "../components/TransactionsList";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";

export default function Home(){
    const [transactions, settransactions] = useState([]);
  const [editTransactions, setEditTransactions] = useState({});


  useEffect(()=>{
    fetchTransactions();
  },[])

  async function fetchTransactions() {
    const res=await fetch('http://localhost:4000/transaction');
    const {data}=await res.json();
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