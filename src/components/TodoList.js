import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListWrapper>
      <TodoItem text='할일 1' done={true} />
      <TodoItem text='할일 2' done={true} />
      <TodoItem text='할일 3' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
      <TodoItem text='할일 4' done={false} />
    </TodoListWrapper>
  );
}

export default TodoList;
