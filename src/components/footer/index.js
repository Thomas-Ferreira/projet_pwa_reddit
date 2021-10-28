import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to='/postCreate'>
        <StyledH1>+</StyledH1>
      </StyledLink>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex: 0;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #1a1a1b;
`

const StyledH1 = styled.h1`
  text-align: center;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100%;
  color: #ffffff;
  background-color: #1a1a1b;
  text-decoration: none;
`

export default Footer
