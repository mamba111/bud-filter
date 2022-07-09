import * as React from 'react'
import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  display: none;
  margin-top: 50px;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    display: table;
  }
`

const TableHeaderRow = styled.tr`
  border-bottom: 1px solid gray;
  font-weight: bold;
`

const Category = styled.span`
  color: gray;
`

const Description = styled.span`
  font-weight: bold;
`

const TableData = styled.td`
  padding: 20px 0;
`

const Amount = styled.td`
  padding: 20px 0;
  font-weight: bold;
`

export const TransactionsListDesktop = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <TableHeaderRow>
            <TableData>Date</TableData>
            <TableData>Transaction Details</TableData>
            <TableData>Amount</TableData>
        </TableHeaderRow>
      </thead>

      <tbody>
        { transactions.map((transaction) => (
          <tr key={transaction.id}>
            <TableData>{transaction.date}</TableData>
            <TableData>
              <Category>{transaction.category_title}</Category>
              <br />
              <Description>{transaction.description}</Description>
            </TableData>
            <Amount>{transaction.amount.value} {transaction.amount.currency_iso}</Amount>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
