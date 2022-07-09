import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-top: 50px;
  padding: 10px 20px;
  text-decoration: none;
  &:hover ${Eye} {
    background: #242529;
    transition: .3s;
    color: #f2d33b;
    opacity: 90%;
    ${Eye} & {
      path{
        stroke: #f2d33b;
        stroke-width: 0.8;
      };
  }
`

const Right = styled.div`
  padding: 0 30px;
  text-align: right;
`

const PAGE_SIZE = 5

export const Paginated = ({ transactions, render, pageNumber, setPageNumber }) => {
  const size = pageNumber * PAGE_SIZE + PAGE_SIZE
  const page = transactions.slice(0, size)

  return (
    <>
      { render(page) }
      { size >= transactions.length ? '' : <ShowMore onClick={() => setPageNumber(pageNumber + 1)}/> }
    </>
  )
}

const ShowMore = ({ onClick }) =>
  <Right>
    <Button type="button" onClick={onClick}><Eye /> Show More</Button>
  </Right>


const Svg = styled.svg`
  vertical-align: middle;
`

const Eye = () =>
  <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.49999 10.8867C6.90666 10.8867 5.61333 9.59334 5.61333 8.00001C5.61333 6.40668 6.90666 5.11334 8.49999 5.11334C10.0933 5.11334 11.3867 6.40668 11.3867 8.00001C11.3867 9.59334 10.0933 10.8867 8.49999 10.8867ZM8.49999 6.11334C7.45999 6.11334 6.61333 6.96001 6.61333 8.00001C6.61333 9.04001 7.45999 9.88668 8.49999 9.88668C9.53999 9.88668 10.3867 9.04001 10.3867 8.00001C10.3867 6.96001 9.53999 6.11334 8.49999 6.11334Z" fill="#14171F"/>
    <path d="M8.5 14.0134C5.99333 14.0134 3.62667 12.5467 2 10C1.29333 8.90003 1.29333 7.10669 2 6.00003C3.63333 3.45336 6 1.98669 8.5 1.98669C11 1.98669 13.3667 3.45336 14.9933 6.00003C15.7 7.10003 15.7 8.89336 14.9933 10C13.3667 12.5467 11 14.0134 8.5 14.0134ZM8.5 2.98669C6.34667 2.98669 4.28667 4.28003 2.84667 6.54003C2.34667 7.32003 2.34667 8.68003 2.84667 9.46003C4.28667 11.72 6.34667 13.0134 8.5 13.0134C10.6533 13.0134 12.7133 11.72 14.1533 9.46003C14.6533 8.68003 14.6533 7.32003 14.1533 6.54003C12.7133 4.28003 10.6533 2.98669 8.5 2.98669Z" fill="#14171F"/>
  </Svg>

