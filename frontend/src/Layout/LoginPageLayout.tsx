import React from 'react'
import { Row } from 'antd'
import styled from 'styled-components'

type LoginPageLayoutProps = {
  children: React.ReactNode
}

const LoginPageLayout: React.FunctionComponent<LoginPageLayoutProps> = ({ children }) => {
  return (
    <Row className="App" style={{ height: '100%' }}>
      <StyledRow>{children}</StyledRow>
    </Row>
  )
}

const StyledRow = styled(Row)`
  position: relative;
  min-width: 300px;
  width: 100%;
`

export default LoginPageLayout
