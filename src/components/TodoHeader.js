import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Year from "react-live-clock";
import Month from "react-live-clock";
import Day from "react-live-clock";

const TodoHeadDiv = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu {
    font-size: 36px;
  }
`;

const DaySpan = styled.span`
  margin: 0;
  font-size: 36px;
  color: #0b0b0b;
`;

function TodoHead() {
  return (
    <TodoHeadDiv>
      <div className='Year-Month'>
        <p>
          <DaySpan>
            <Year id='Year' format={"YYYY"} ticking={false} timezone={"KR/Pacific"} />년
          </DaySpan>
          &nbsp;&nbsp;
          <DaySpan>
            <Month format={"MM"} ticking={false} timezone={"KR/Pacific"} />월
          </DaySpan>
          &nbsp;&nbsp;
          <DaySpan>
            <Day format={"DD"} ticking={false} timezone={"KR/Pacific"} />일
          </DaySpan>
        </p>
      </div>
      <FaBars className='menu' />
    </TodoHeadDiv>
  );
}

export default TodoHead;
