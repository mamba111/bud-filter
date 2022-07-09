import * as React from 'react'

import { TransactionsListDesktop } from './TransactionsListDesktop'
import { TransactionsListMobile } from './TransactionsListMobile'

export const TransactionsList = ({ transactions }) => {
  return (
    <>
      <TransactionsListDesktop transactions={transactions} />
      <TransactionsListMobile transactions={transactions} />
    </>
  )
}
