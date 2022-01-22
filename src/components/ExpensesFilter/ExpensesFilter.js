import "../styles/ExpensesFilter/ExpensesFilter.css";
import "../styles/UI/Card.css";

const ExpensesFilter = ({ onSetYear, selected }) => {
  const changeHandler = ({ target }) => onSetYear(target.value);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="select">Filter by year</label>
        <select value={selected} id="select" onChange={changeHandler}>
          <option id="select" defaultValue value="2022">
            2022
          </option>
          <option id="select" value="2021">
            2021
          </option>
          <option id="select" value="2020">
            2020
          </option>
          <option id="select" value="2019">
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
