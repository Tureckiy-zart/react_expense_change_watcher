import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../styles/Expenses/ExpenseItem.css";
// import { useState } from "react";

const ExpenseItem = ({ data }) => {
  return (
    <li key={data.id}>
      <Card className={"expense-item"}>
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2 className="">{data.title}</h2>
          <div className="expense-item__price">${data.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
