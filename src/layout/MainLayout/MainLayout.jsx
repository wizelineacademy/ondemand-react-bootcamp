import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header, Footer } from 'layout'
import { theme } from 'config'
import Styled from './MainLayout.styles'
import GlobalStyles from 'Global.styles'

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyles />
      <Styled.Container>
        <Header />
        <Styled.MainContent>{children}</Styled.MainContent>
        <Footer />
      </Styled.Container>
    </ThemeProvider>
  )
}

export default MainLayout