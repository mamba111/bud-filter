import * as React from 'react'
import styled from 'styled-components'

const UnstyledTag = ({ amount, className }) =>
  <span className={className}>{ parseInt(amount, 10) < 0 ? 'Expense' : 'Income' }</span>

export const Tag = styled(UnstyledTag)`
  border-radius: 25px;
  padding: 10px 20px;
  text-align: center;
  color: ${props => parseInt(props.amount, 10) < 0 ? '#F15757' : '#3DCAB1'};
  background-color: ${props => parseInt(props.amount, 10) < 0 ? '#F8E1E1' : '#DDF2EE'};
`
