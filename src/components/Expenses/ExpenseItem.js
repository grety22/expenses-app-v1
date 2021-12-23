import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// firebase 
import { db } from '../../firebase-config';
import { doc, deleteDoc } from 'firebase/firestore';

export default function ExpenseItem(props) {
    const deleteExpense = async (id) => {
        const expenseDoc = doc(db, "expenses", id);
        await deleteDoc(expenseDoc);
    }  
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <div className="expense-item__icons">
                    <FontAwesomeIcon onClick={() => {console.log(props.amount)}} icon={faTrash} className="fa-lg"></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon={faPen} className="fa-lg"></FontAwesomeIcon> */}
                </div>
            </Card>
        </li>
    )
}