import * as React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  text-align: center;
  padding: 25px 0;
  border-bottom: 1px solid gray;

  &:last-of-type {
    border: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Amount = styled.p`
  font-weight: bold;
`

const Description = styled.span`
  font-weight: bold;
`

const Category = styled.span`
  color: gray;
`

export const TransactionsListMobile = ({ transactions }) => (
  transactions.map((transaction) => (
    <Cell key={transaction.id}>
      <p>{transaction.date}</p>
      <p>
        <Category>{transaction.category_title}</Category>
        <br />
        <Description>{transaction.description}</Description>
      </p>
      <Amount>{transaction.amount.value} {transaction.amount.currency_iso}</Amount>
    </Cell>
  ))
)
