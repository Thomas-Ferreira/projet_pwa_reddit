import { useState, useEffect } from 'react'
import styled from 'styled-components'
//import { uuid } from "uuidv4";

const Post = props => {
  const [postList, setPostList] = useState(
    localStorage.getItem('postList')
      ? JSON.parse(localStorage.getItem('postList'))
      : []
  )

  useEffect(() => {
    console.log(postList)
    localStorage.setItem('postList', JSON.stringify([postList]))
  }, [])

  return (
    <StyledDiv>
      {postList.map(post => {
        return (
          <StyledPost>
            <p>{post.label}</p>
          </StyledPost>
        )
      })}
    </StyledDiv>
  )
}

const StyledPost = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  padding: 10%;
  width: 100%;
  align-items: center;
  background-color: #1a1a1b;
`

export default Post
