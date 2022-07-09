import * as React from 'react'
import styled from 'styled-components'

export const FILTER_BY = {
  ALL: 'ALL',
  SMALLEST: 'SMALLEST',
  BIGGEST: 'BIGGEST',
}

const SelectWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const Select = styled.select`
  margin-top: 50px;
`

export const Filter = ({ onChange }) => (
  <SelectWrapper>
    <Select onChange={onChange}>
      <option value={FILTER_BY.ALL}>All Transactions</option>
      <option value={FILTER_BY.SMALLEST}>10 Smallest Transactions</option>
      <option value={FILTER_BY.BIGGEST}>10 Biggest Transactions</option>
    </Select>
  </SelectWrapper>
)

