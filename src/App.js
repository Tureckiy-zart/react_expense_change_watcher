import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { INITIAL_EXPENSES } from "./components/data";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import "./components/styles/Expenses/Expenses.css";
import "./components/styles/ExpensesFilter/ExpensesFilter.css";

function App() {
  const [expenseItems, setExpenseItems] = useState(INITIAL_EXPENSES);
  const addExpense = (item) => setExpenseItems((p) => [item, ...p]);

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
