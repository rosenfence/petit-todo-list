import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CreateButton = styled.button`
  background-color: #0b0b0b;
  z-index: 5;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: absolute;
  right: 6%;
  bottom: 10px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-mdadd {
    color: #fff;
  }
`;

function TodoCreate() {
  return (
    <CreateButton>
      <MdAdd className='icon-mdadd' />
    </CreateButton>
  );
}

export default TodoCreate;
