import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #242529;
  border-radius: 0 0 20px 20px;
  color: white;
  padding: 30px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const H1 = styled.h1`
  font-size: 3rem;
  margin: 0;
`

const Balance = styled.div`
  margin-top: 25px;

  @media (min-width: 768px) {
    text-align: right;
  }
`

const Amount = styled(H1)`
  color: #F2D33B;
  font-weight: 400;
`

const Greeting = styled.p`
  color: #919294;
  font-size: 3rem;
  margin: 0;
`

const Account = styled.div`
  font-weight: 400;
  margin-top: 25px;
`

const P = styled.p`
  margin: 0;
`

const AccountNumber = styled(P)`
  margin-top: 10px;
`

const Title = styled.span`
  font-size: 3rem;
  margin: 0;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const DashboardHeader = ({ provider, balance }) => (
  <Wrapper>
    <Flex>
      <H1>Dashboard</H1>
      <Title>{provider.title}</Title>
    </Flex>

    <Greeting>Hi User!</Greeting>

    <Flex>
      <Account>
        <P>Account Number:</P>
        <AccountNumber>{provider.account_number}</AccountNumber>
      </Account>

      <Balance>
        <H1>Balance</H1>
        <Amount>{
          new Intl.NumberFormat('en-US', { style: 'currency', currency: balance.currency_iso }).format(balance.amount)
        }</Amount>
      </Balance>
    </Flex>
  </Wrapper>
)
