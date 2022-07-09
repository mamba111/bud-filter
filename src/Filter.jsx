import * as React from 'react'
import styled from 'styled-components'

export const FILTER_BY = {
  ALL: 'ALL',
  EXPENSES: 'EXPENSES',
  SMALLEST: 'SMALLEST',
}

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 30px;
`

const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
`

const Select = styled.select`
  font-size: 1.5rem;
  width: 300px;
`

const Option = styled.option`
  font-size: 1.5rem;
`

export const Filter = ({ onChange }) => (
  <Wrapper>
    <Flex>
      <H2>Transaction History</H2>

      <Select onChange={onChange}>
        <Option value={FILTER_BY.ALL}>All Transactions</Option>
        <Option value={FILTER_BY.EXPENSES}>10 Smallest Expenses</Option>
        <Option value={FILTER_BY.SMALLEST}>10 Largest Expenses</Option>
      </Select>
    </Flex>
  </Wrapper>
)

