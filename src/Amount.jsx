import * as React from 'react'
import styled from 'styled-components'

const UnstyledAmount = ({ amount, className }) => {
  const formatted = new Intl
    .NumberFormat('en-US', { style: 'currency', currency: amount.currency_iso })
    .format(amount.value)

  return <span className={className}>{formatted}</span>
}

export const Amount = styled(UnstyledAmount)`
  padding: 20px 0;
  font-weight: bold;
`
