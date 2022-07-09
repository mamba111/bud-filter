import * as React from 'react'
import styled from 'styled-components'
import { Receiver } from './Receiver'
import { Tag } from './Tag'
import { FormattedDate } from './FormattedDate'
import { Amount } from './Amount'

const Wrapper = styled.div`
  margin-top: 30px;
  overflow-x: auto;
  padding: 0 30px;
  width : 100%;
`

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  text-align: left;
  width: 100%;
`

const TableHeaderRow = styled.tr`
  border-bottom: 1px solid #ABACAF;
  font-weight: bold;
`

const TableData = styled.td`
  padding: 20px 0;
`

const TableHeader = styled(TableData)`
  color: #ABACAF;
  font-size: 0.9rem;
  min-width: 200px;
  text-transform: uppercase;
`

export const TransactionsList = ({ transactions }) => (
  <Wrapper>
    <Table>
      <thead>
        <TableHeaderRow>
            <TableHeader>Receiver</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
        </TableHeaderRow>
      </thead>

      <tbody>
        { transactions.map((transaction) => (
          <tr key={transaction.id}>
            <TableData><Receiver transaction={transaction} /></TableData>
            <TableData>{transaction.category_title}</TableData>
            <TableData><FormattedDate date={transaction.date} /></TableData>
            <TableData><Amount amount={transaction.amount} /></TableData>
            <TableData><Tag amount={transaction.amount.value} /></TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  </Wrapper>
)
