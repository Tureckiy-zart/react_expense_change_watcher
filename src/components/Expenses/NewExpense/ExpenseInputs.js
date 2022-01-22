import "../../styles/NewExpense/ExpenseForm.css";

const ExpenseInputs = ({ changeHandler, initState }) => {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="some"
          onChange={changeHandler}
          value={initState.title}
          // value={initState.title}
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
          value={initState.amount}
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
          placeholder="price..."
          value={initState.date}
        />
      </div>
    </div>
  );
};

export default ExpenseInputs;
