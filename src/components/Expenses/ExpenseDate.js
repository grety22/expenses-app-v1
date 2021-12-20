import './ExpenseDate.css';

export default function ExpenseDate(props) {

    var timestamp = props.date.seconds;
    var date = new Date(timestamp*1000);

    const month = date.toLocaleString('en-US', {month: 'long'}),
            day = date.toLocaleString('en-US', {day: '2-digit'}),
           year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
