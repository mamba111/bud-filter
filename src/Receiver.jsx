import * as React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  align-items: center;
  display: flex;
`

const Description = styled.span`
  font-weight: bold;
  margin-left: 20px;
`

export const Receiver = ({ transaction }) =>
  <Flex>
    <Icon amount={transaction.amount.value} />
    <Description>{transaction.description}</Description>
  </Flex>

const Icon = ({ amount }) => parseInt(amount, 10) < 0 ? <IconExpense /> : <IconIncome />

const IconExpense = () =>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12.0001" r="12" fill="white"/>
    <path d="M10.9147 7.37533L6.84068 15.847C6.66904 16.2039 6.74455 16.6071 7.03765 16.8992C7.33079 17.1914 7.78247 17.3135 8.21639 17.2181L11.6435 16.464V12.7721C11.6435 12.6022 11.8031 12.4644 12 12.4644C12.1969 12.4644 12.3565 12.6022 12.3565 12.7721V16.464L15.7836 17.2181C16.2176 17.3135 16.6692 17.1914 16.9624 16.8992C17.2561 16.6065 17.3306 16.2033 17.1593 15.847L13.0854 7.3753C12.8999 6.98959 12.484 6.75 12 6.75C11.516 6.75 11.1001 6.98959 10.9147 7.37533Z" fill="#F15757"/>
    <rect opacity="0.01" x="3" y="21" width="18" height="18" transform="rotate(-90 3 21)" fill="white"/>
  </svg>

const IconIncome = () =>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="white"/>
    <path d="M13.0853 16.6247L17.1593 8.15301C17.331 7.79611 17.2555 7.39291 16.9624 7.10077C16.6692 6.80864 16.2175 6.68645 15.7836 6.78194L12.3565 7.53599V11.2279C12.3565 11.3978 12.1969 11.5356 12 11.5356C11.8031 11.5356 11.6435 11.3978 11.6435 11.2279V7.53599L8.21639 6.78194C7.78244 6.68645 7.33077 6.80862 7.03764 7.10077C6.74395 7.3935 6.66937 7.79675 6.84068 8.15303L10.9146 16.6247C11.1001 17.0104 11.516 17.25 12 17.25C12.484 17.25 12.8999 17.0104 13.0853 16.6247Z" fill="#3DCAB1"/>
    <rect opacity="0.01" x="3" y="21" width="18" height="18" transform="rotate(-90 3 21)" fill="white"/>
  </svg>
