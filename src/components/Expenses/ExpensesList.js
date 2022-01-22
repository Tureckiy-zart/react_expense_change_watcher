import "../styles/Expenses/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  let returnContent = <h2 className="expenses-list__fallback">No Expenses found.</h2>
    const list = items.map(({ id, ...rest }) => (
    <ExpenseItem key={id} data={rest} />
  ));
  if (items.length) returnContent = <ul>{list}</ul>;

  return <>{returnContent}</>;
};

export default ExpensesList;
