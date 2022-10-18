import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const RemoveDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0b0b0b;
  font-size: 14px;
  cursor: pointer;
  display: none;
`;

const TodoItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${RemoveDiv} {
      display: initial;
    }
  }
`;

const CheckDiv = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #0b0b0b;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #e4e4e4;
      color: #e4e4e4;
    `}
`;

const TextDiv = styled.div`
  flex: 1;
  font-style: 21px;
  color: #0b0b0b;
  ${(props) =>
    props.done &&
    css`
      color: #e4e4e4;
      text-decoration: line-through;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemDiv>
      <CheckDiv done={done}>{done && <MdDone />}</CheckDiv>
      <TextDiv done={done}>{text}</TextDiv>
      <RemoveDiv>
        <MdDelete />
      </RemoveDiv>
    </TodoItemDiv>
  );
}

export default TodoItem;
