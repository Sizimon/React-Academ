import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: 'Car', amount:4580, date: new Date(2023, 5, 8)
    },
    {
      title: 'Phone', amount:999, date: new Date(2022, 8, 21)
    },
    {
      title: 'Food', amount:180, date: new Date(2023, 5, 8)
    },

  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
    </div>
    
  );
}

export default App;
