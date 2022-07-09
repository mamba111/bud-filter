import * as React from 'react'

export const TransactionsHeader = ({ provider, balance }) => (
  <div>
    <h1>Transaction History</h1>
    <p>{provider.title}</p>
    <p>{provider.description}: {provider.account_number}</p>
    <p>Balance: {balance.amount}: {balance.currency_iso}</p>
  </div>
)
