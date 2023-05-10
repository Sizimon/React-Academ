import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseData.css'


export default function ExpenseData(props) {
  return (
    <div className='expenses'>
        <h2>Let's get started!</h2>
            <ExpenseItem 
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem 
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem 
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
            ></ExpenseItem>
    </div>
  )
}
