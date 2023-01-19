import React from 'react';
import './NewExpense.css';
import ExpsenseForm from './ExpenseForm';
const NewExpense = (propsNew) => {
  const saveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    propsNew.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpsenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
