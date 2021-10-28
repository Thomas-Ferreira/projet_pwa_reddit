import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    console.log(title)
    console.log(desc)
    console.log(post)
    console.log(localStorage.getItem('username'))
  })

  const addPost = (Title, Desc) => {
    const newPost = {
      id: 2,
      label: Title,
      desc: Desc,
      vote: 0,
      author: localStorage.getItem('username'),
      sub: 'r/test'
    }
    localStorage.setItem('postList', JSON.stringify([...post, newPost]))
    setPost([...post, newPost])
    history.push('/post')
  }

  return (
    <div>
      <DivHeader>
        <Titre>Publication</Titre>
        <StyledButton onClick={() => addPost(title, desc)}>
          Publier
        </StyledButton>
      </DivHeader>
      <StyledForm>
        <StyledInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          name='titre'
          type='text'
        ></StyledInput>
        <textarea
          value={desc}
          onChange={e => setDesc(e.target.value)}
          name='postTexte'
          type='text'
        ></textarea>
      </StyledForm>
    </div>
  )
}

const DivHeader = styled.header`
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #1a1a1b;
`

const StyledButton = styled.button`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

const Titre = styled.p`
  color: #ffffff;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

export default PostCreate
