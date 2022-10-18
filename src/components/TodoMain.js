import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoMain({ children }) {
  return <TodoWrapper>{children}</TodoWrapper>;
}

export default TodoMain;
