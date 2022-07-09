import * as React from 'react'
import styled from 'styled-components'

import { STATUS } from './Api'
import { Filter, FILTER_BY } from './Filter'
import { DashboardHeader } from './DashboardHeader'
import { TransactionsList } from './TransactionsList'

const Container = styled.div`
  width: 90%;
  margin: auto;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    width: 70%;
  }
`

const filterTransactions = (by, transactions) => {
  switch(by) {
    case FILTER_BY.ALL: {
      return [...transactions]
        .sort((b, a) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
    }
    case FILTER_BY.SMALLEST: {
      return [...transactions]
        .sort((a, b) => parseInt(a.amount.value, 10) - parseInt(b.amount.value, 10))
        .slice(0, 10)
    }
    case FILTER_BY.BIGGEST: {
      return [...transactions]
        .sort((b, a) => parseInt(a.amount.value, 10) - parseInt(b.amount.value, 10))
        .slice(0, 10)
    }
  }
}

export const Dashboard = ({ data, filterBy, onChangeFilter }) => {
  if (data.status === STATUS.LOADING) return <Container>Loading..</Container>
  if (data.status === STATUS.ERROR) return <Container>Error</Container>

  const filteredTransactions = filterTransactions(filterBy, data.json.transactions)

  return (
    <>
    <DashboardHeader provider={data.json.provider} balance={data.json.balance} />
    <Filter onChange={onChangeFilter} />
    <TransactionsList transactions={filteredTransactions} />
    </>
  )
}
