import { useState } from "react";
import "../../styles/NewExpense/ExpenseForm.css";

const INITIAL_STATE = {
  title: "new",
  amount: "100",
  date: new Date("2022-01-22"),
};
const ExpenseForm = ({ onGetData, canShow, onHideForm }) => {
  const [inputData, setInputData] = useState(INITIAL_STATE);

  const changeHandler = (e) => {
    setInputData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onGetData(inputData);
    resetInputHandler();
  };

  const resetInputHandler = () => setInputData(INITIAL_STATE);
  
  return (
    <>
      {canShow && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="some"
                onChange={changeHandler}
                value={inputData.title}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                onChange={changeHandler}
                id="amount"
                name="amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="price..."
                value={inputData.amount}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                onChange={changeHandler}
                id="date"
                type="date"
                name="date"
                min="2019-01-01"
                max="2022-12-31"
                value={inputData.date}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type='button' onClick={onHideForm}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
