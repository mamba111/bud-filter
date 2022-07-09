import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import styled from 'styled-components'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const Div = styled.div`
  background: pink;
`

root.render(
  <Div>Lorem Ipsum</Div>
)


