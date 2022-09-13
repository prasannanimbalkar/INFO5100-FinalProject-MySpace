import React from 'react';
import { useSelector } from 'react-redux';
// Utils
import { numberWithCommas } from '../../utils/format';

// Style
import styled from 'styled-components';

export const IncomeExpense = () => {
  const { transactions } = useSelector((state) => state.expenses);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <IncomeExpenseTag>
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{numberWithCommas(expense)}</p>
      </div>
    </div>
    </IncomeExpenseTag>
  );
};

const IncomeExpenseTag = styled.div`
  h4 {
    color: black;
  }
`;
