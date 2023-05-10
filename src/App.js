import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";
function App() {
  const dummy_expenses = [
    {id: 'e1',title: 'Toilet Paper',amount: 94.12, date: new Date(2019,5,3),},
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022,3,3) },
    {id: 'e3',title: 'Car Insurance',amount: 294.67,date: new Date(2022,1,3),},
    {id: 'e4',title: 'New Desk (Wooden)',amount: 450,date: new Date(2021,9,3),}];

    const [expenses,setexpenses] = useState(dummy_expenses)

    const addExpenseHandler = expense =>{
      setexpenses((prevExpenses) => {
        return [expense,...prevExpenses]
      });
    };

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
