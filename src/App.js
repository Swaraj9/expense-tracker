import { useState } from 'react';
import './App.css';

function App() {

  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [expenseList, setExpenseList] = useState([]);

  return (
    <div className="App">
      <div className = "main-container">
        <div className = "container">
          <div className = "container">
            <h3>Balance:</h3>
            <div className = "balance" style = {{color: balance > 0 ? "rgb(124, 207, 0)" : "rgb(255, 68, 0)"}}>{balance}$</div>
          </div>
          <div className = "input-container">
            <input placeholder = "Name..." value = {name} onChange = {e => setName(e.target.value)} type = "text"/>
            <input placeholder = "Amount..." value = {amount} onChange = {e => setAmount(e.target.value)} type = "number"/>
            <button onClick = {() => {
              if(!name || !amount) return;
              setBalance(balance + parseFloat(amount));
              setExpenseList([...expenseList, {name, amount}]);
              setName('');
              setAmount('');
            }}>Calculate</button>      
          </div> 
        </div>
        <div className = "container">
          <h3>History:</h3>
          <ul className = "list">
            {expenseList.map(expense => <li className = {expense.amount > 0 ? "positive-expense expense" : "negetive-expense expense"}>{`${expense.name} : ${expense.amount}$`}</li>).reverse()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
