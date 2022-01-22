import { nanoid } from "nanoid";
import ExpenseForm from "./ExpenseForm";
import "../../styles/NewExpense/NewExpense.css";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [canShowForm, setCanShowForm] = useState(false);

  const saveNewExpenseData = (enteredData) =>
    onAddExpense({
      id: nanoid(),
      ...enteredData,
    });
  const clickHandlerOpenForm = () => setCanShowForm((prev) => !prev);

  return (
    <div className="new-expense">
      {!canShowForm && (
        <button className="button" onClick={clickHandlerOpenForm}>
          Add new Expense
        </button>
      )}
      <ExpenseForm
        onGetData={saveNewExpenseData}
        canShow={canShowForm}
        onHideForm={clickHandlerOpenForm}
      />
    </div>
  );
};

export default NewExpense;
