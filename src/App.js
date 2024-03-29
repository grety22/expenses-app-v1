import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

// const dummy_data_expenses = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   { id: 'e5', title: 'Home', amount: 25000, date: new Date(2021, 2, 10) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2022, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2022, 5, 12),
//   },
// ];

function App() {
  const [expenses, setExpenses] = useState([]);
  const expensesCollectionRef = collection(db, "expenses");

  useEffect(() => {
    const getExpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      console.log(data);
      setExpenses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getExpenses();
  }, []);
  // const [expenses, setExpenses] = useState(dummy_data_expenses);

  // Alternative code (old way):
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Expenses App"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });  
  }

  // JSX alternative :
  return (
    <div>
      <h2 className='app-h2'>expen<span className='app-span'>$</span>es</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <span className='app-span__control-version'>v 1.2</span>
    </div>
  );
}

export default App;
