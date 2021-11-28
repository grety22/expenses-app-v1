import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const items = props.items;

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const allExpenses = filteredExpenses.map((item) =>
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
    );

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }; 

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.length === 0 ? <p className='no-expenses-found'>No expenses found</p> : allExpenses}
        </Card>
    );
}