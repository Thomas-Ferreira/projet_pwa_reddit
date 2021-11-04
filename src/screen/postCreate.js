import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const PostCreate = () => {
  const history = useHistory()
  const [post, setPost] = useState(
    localStorage.getItem('postList')
      ? JSON.parse(localStorage.getItem('postList'))
      : []
  )

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [subreddit, setSubreddit] = useState('')

  const addPost = (Title, Desc, Sub) => {
    const newPost = {
      id: post.length,
      label: Title,
      desc: Desc,
      vote: 0,
      author: localStorage.getItem('username'),
      sub: Sub
    }
    localStorage.setItem('postList', JSON.stringify([...post, newPost]))
    setPost([...post, newPost])
    history.push('/post')
  }

  return (
    <Container>
      <DivHeader>
        <Titre>Publication</Titre>
        <StyledButton onClick={() => addPost(title, desc, subreddit)}>
          Publier
        </StyledButton>
      </DivHeader>
      <StyledForm>
        <StyledSelect
          name='subreddit'
          onChange={e => setSubreddit(e.target.value)}
        >
          <option value=''>Choisir une communauté</option>
          <option value='r/test'>r/test</option>
          <option value='r/memes'>r/memes</option>
        </StyledSelect>
        <StyledInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Un titre intéressant'
          name='titre'
          type='text'
        ></StyledInput>
        <StyledTextarea
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder='Le texte, facultatif, de votre présentation'
          name='postTexte'
          type='text'
        ></StyledTextarea>
      </StyledForm>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  font-size: 15px;
`

const DivHeader = styled.header`
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: #000000;
`

const StyledButton = styled.button`
  height: 30px;
  outline: none;
  background-color: #000000;
  color: #ffffff;
`

const Titre = styled.p`
  color: #ffffff;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

const StyledSelect = styled.select`
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0;
  margin-bottom: 12px;
  outline: none;
`

const StyledTextarea = styled.textarea`
  height: 100px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0;
  outline: none;
`

export default PostCreate
