import './App.css';
import ExpenseData from './components/ExpenseData';

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
      <ExpenseData expenses={expenses}/>
    </div>
    
  );
}

export default App;
