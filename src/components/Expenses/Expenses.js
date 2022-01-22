import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "../styles/ExpensesFilter/ExpensesFilter.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [filteredYear, setFilteredYear] = useState("2022");

  useEffect(() => {
    setFilteredItems(
      items.filter((i) => {
        return i.date.getFullYear().toString() === filteredYear;
      }) || items
    );
  }, [filteredYear, items]);

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onSetYear={setFilteredYear} selected={filteredYear} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </>
  );
};

export default Expenses;
