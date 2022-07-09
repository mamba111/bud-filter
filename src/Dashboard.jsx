import * as React from 'react'
import styled from 'styled-components'

import { STATUS } from './Api'
import { Filter, FILTER_BY } from './Filter'
import { DashboardHeader } from './DashboardHeader'
import { TransactionsList } from './TransactionsList'
import { Paginated } from './Paginated'

const Wrapper = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  padding-bottom: 30px;
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
    case FILTER_BY.EXPENSES: {
      return [...transactions]
        .filter(a=>parseInt(a.amount.value, 10) <0)
        .sort((b, a) => parseInt(a.amount.value, 10) - parseInt(b.amount.value, 10))
        .slice(0, 10)
    }
  }
}

export const Dashboard = ({ data }) => {
  const [filterBy, setFilterBy] = React.useState(FILTER_BY.ALL)
  const [pageNumber, setPageNumber] = React.useState(0)
  const onChangeFilter = (event) => {
    setFilterBy(event.target.value)
    setPageNumber(0)
  }

  if (data.status === STATUS.LOADING) return <span>Loading..</span>
  if (data.status === STATUS.ERROR) return <span>Error</span>

  const filteredTransactions = filterTransactions(filterBy, data.json.transactions)

  return (
    <Wrapper>
      <DashboardHeader provider={data.json.provider} balance={data.json.balance} />
      <Filter onChange={onChangeFilter} />
      <Paginated pageNumber={pageNumber} setPageNumber={setPageNumber} transactions={filteredTransactions} render={(transactions) => <TransactionsList transactions={transactions} />} />
    </Wrapper>
  )
}
