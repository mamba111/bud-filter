import * as React from 'react'
import styled from 'styled-components'

const UnstyledFormattedDate = ({ date, className }) => {
  const formatted = new Intl
    .DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .format(new Date(date))

  return <span className={className}>{formatted}</span>
}

export const FormattedDate = styled(UnstyledFormattedDate)`
  color: #ABACAF;
`

