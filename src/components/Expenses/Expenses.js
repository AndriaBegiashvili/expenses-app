import React, {useState} from "react";
import "./Expense.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";




const Expenses = (props) => {
    
    const [filteredYear,setFilteredYear] = useState("2020")

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    };
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return(<Card className="expenses">
        <ExpensesFilter selected={filteredYear} 
        onChangeFilter={filterChangeHandler}/>
        <div>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
    
    </div>
</Card>)
    
}
export default Expenses;