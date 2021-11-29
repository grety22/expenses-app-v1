import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const items = props.items;

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }; 

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
            {/* {filteredExpenses.length === 0 ? <p className='no-expenses-found'>No expenses found</p> : allExpenses} */}
            {/* another useful way : */}
            {/* {filteredExpenses.length === 0 && <p className='no-expenses-found'>No expenses found</p>}
            {filteredExpenses.length > 0 && allExpenses} */}
        </Card>
    );
}