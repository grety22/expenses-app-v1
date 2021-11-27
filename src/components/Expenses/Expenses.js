import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const items = props.items;
    const allExpenses = items.map((item) =>
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
    );
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }; 

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {allExpenses}
        </Card>
    );
}