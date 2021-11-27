import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
    const items = props.items;
    const allExpenses = items.map((item) =>
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
    );
    return <Card className="expenses">{allExpenses}</Card>;
}