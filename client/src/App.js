import { useState } from "react";

function App() {
  const [form, setform] = useState({
    amount:0,
    description: "",
    date: "",
  });

  async function handleSubmit(e){
    e.preventDefault();
    const res=await fetch('http://localhost:4000/transaction',{
      method: 'POST',
      body:form,
    });
    console.log(res);
  }

  function handleInput(e){
    console.log(e.target.value);
    setform({...form,[e.target.name]:e.target.value});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="number"
        name="amount" 
        value={form.amount}
        onChange={handleInput} 
        placeholder="Enter transaction amount"
        />
        <input 
        type="text" 
        name="description" 
        value={form.description}
        onChange={handleInput}
        placeholder="Enter transaction description"
        />
        <input 
        type="date" 
        name="date"
        value={form.date  }
        onChange={handleInput}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
