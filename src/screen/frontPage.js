import React from 'react'
import styled from 'styled-components'
import logo from '../avatar_reddit.svg'
import { useHistory } from 'react-router'

const FrontPage = () => {
  const history = useHistory()

  return (
    <div>
      <StyledDiv>
        <h3>Bienvenue</h3>
        <StyledP>
          Il existe une commuanuté Reddit pour chaque sujet imaginable
        </StyledP>
      </StyledDiv>
      <button onClick={() => history.push('/Login')}>Se Connecter</button>
      <button onClick={() => history.push('/post')}>Accéder au Post</button>
    </div>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  align-items: center;
  background-color: #030303;
`
const StyledP = styled.p`
  width: 100%;
`

export default FrontPage
