import React from 'react'
import styled from 'styled-components/native'
import { graySemiLight } from 'style/colors'

const ContainerStyled = styled.View`
  flex: 1;
  background-color: ${graySemiLight};
  ${p => !p.stretch && `padding: 10px;`}
`

const Container = ({ children, stretch = false }) => (
  <ContainerStyled stretch={stretch}>
    {children}
  </ContainerStyled>
)

export { Container }
