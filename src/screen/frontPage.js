import React from 'react'
import styled from 'styled-components'
import logo from '../avatar_reddit.svg'
import { useHistory } from 'react-router'

const FrontPage = () => {
  const history = useHistory()

  return (
    <div>
      <StyledDiv>
        <img src={logo}></img>
        <h3>Bienvenue</h3>
        <p>Il existe une commuanuté Reddit pour chaque sujet imaginable</p>
      </StyledDiv>
      <button onClick={() => history.push('/Login')}>Se Connecter</button>
    </div>
  )
}

const StyledDiv = styled.div`
  padding: 10%;
  width: 100%;
  align-items: center;
  background-color: #030303;
`

export default FrontPage
