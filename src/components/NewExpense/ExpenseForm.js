import React, { useState } from 'react';
import './ExpenseForm.css';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function ExpenseForm(props) {
    const [enteredTitle,  setEnteredTitle]  = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate,   setEnteredDate]   = useState('');

    const expensesCollectionRef = collection(db, "expenses");



    // Use this for single-state approach:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Use this for single-state approach:
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // Use this for single-state approach:
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // Use this for single-state approach:
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        // empty screen after submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>cancel</button>
                <button type="submit">add expense</button>
            </div>
        </form>
    )
}
