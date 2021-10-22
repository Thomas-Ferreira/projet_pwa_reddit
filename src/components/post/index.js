import { useState, useEffect } from "react";
import styled from "styled-components";
//import { uuid } from "uuidv4";

const Post = (props) => {
  const [postList, setPostList] = useState([
    {
      id: 1,
      label: "postTest",
      desc: "test",
      vote: 0,
      author: "test",
      sub: "r/test",
    },
  ]);

  useEffect(() => {
    console.log(postList);
  }, []);

  return (
    <StyledDiv>
      {postList.map((post) => {
        return (
          <StyledPost>
            <p>{post.label}</p>
          </StyledPost>
        );
      })}
    </StyledDiv>
  );
};

const StyledPost = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1b;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  padding: 10%;
`;

export default Post;
