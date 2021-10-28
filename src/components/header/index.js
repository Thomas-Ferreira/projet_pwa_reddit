import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../logo_reddit.png'

const Header = () => {
  const [showLink, setShowLink] = useState(false)

  const menuBurger = () => {
    setShowLink(showLink => !showLink)
  }
  const reset = () => {
    setShowLink(false)
  }
  return (
    <DivHeader>
      <StyledBurgerMenu onClick={menuBurger}>
        <Logo src={logo}></Logo>
        <StyledBurger></StyledBurger>
      </StyledBurgerMenu>
      <StyledNav>
        {showLink && (
          <StyledLink onClick={reset} to='/login'>
            Login
          </StyledLink>
        )}
      </StyledNav>
      <Titre>Reddit: The front page of internet</Titre>
    </DivHeader>
  )
}

const DivHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #1a1a1b;
`

const Logo = styled.img`
  width: 32px;
  height: 32px;
  padding: 8px 8px 8px 0;
  background-color: inherit;
`

const Titre = styled.p`
  color: #ffffff;
`

const StyledBurgerMenu = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 20px;
`

const StyledBurger = styled.span`
  height: 3px;
  width: 100%;
  background-color: #1a1a1b;
`

const StyledNav = styled.div`
  width: 75%;
  height: 500vh;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
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

export default Header
