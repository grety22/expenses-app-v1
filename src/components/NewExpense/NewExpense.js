import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // adding an id to the new data object 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stoptEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <Card className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stoptEditingHandler} />}
        </Card>
    )
}