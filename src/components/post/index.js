import { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../../logo_reddit.png'
import { FiArrowUp } from 'react-icons/fi'
import { FiArrowDown } from 'react-icons/fi'

const Post = () => {
  const [postList, setPostList] = useState([])
  const [vote, setVote] = useState(0)
  const [canUpvote, setUpvote] = useState(true)
  const [canDownvote, setDownvote] = useState(true)

  const addUpvote = () => {
    if (canUpvote === true) {
      setVote(vote + 1)
      setUpvote(false)
    }
  }

  const removeUpvote = () => {
    if (canDownvote === true) {
      setVote(vote - 1)
      setDownvote(false)
    }
  }

  useEffect(() => {
    setPostList(
      localStorage.getItem('postList')
        ? JSON.parse(localStorage.getItem('postList'))
        : []
    )
  }, [])

  return (
    <div>
      {postList.map(post => {
        return (
          <Container>
            <StyledDiv>
              <StyledPost>
                <Logo src={logo}></Logo>
                <p>{post.sub}</p>
                <div>
                  <p> Published by {post.author}</p>
                </div>
              </StyledPost>
              <StyledTitle>
                <h3>{post.label}</h3>
              </StyledTitle>
              <Upvote>
                <FiArrowUp onClick={() => addUpvote()} />
                <p>{vote}</p>
                <FiArrowDown onClick={() => removeUpvote()} />
              </Upvote>
            </StyledDiv>
          </Container>
        )
      })}
    </div>
  )
}

const StyledPost = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`

const Container = styled.div`
  padding: 10px 0;
`

const StyledTitle = styled.div`
  display: block;
`

const StyledDiv = styled.div`
  width: 100%;
  align-items: center;
  background-color: #1a1a1b;
`
const Logo = styled.img`
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: inherit;
`

const Upvote = styled.div`
  display: flex;
`

export default Post
