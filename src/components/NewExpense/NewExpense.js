import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

export default function NewExpense(props) {
    return (
        <Card className="new-expense">
            <ExpenseForm/>
        </Card>
    )
}