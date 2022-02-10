import React from "react";
import { Button, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import styled from "styled-components";

import { usePagination } from "../hooks/usePagination";
import TodoList from "./TodoList";

interface IProps {
  data: any;
  setTasks: any;
  childComp?: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const StyledPaginationCount = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

export default function Pagination(props: IProps) {
  const { setTasks, data } = props;
  const {
    currentPage,
    pages,
    currentItems,
    handleClick,
    handleNextbtn,
    handlePrevbtn,
  } = usePagination(data);

  const renderPageNumbers = pages.map((number: any) => {
    return (
      <StyledPaginationCount key={number} id={number} onClick={handleClick}>
        {number}
      </StyledPaginationCount>
    );
  });

  return (
    <>
      <TodoList currentItems={currentItems} setTasks={setTasks} data={data} />
      <Container>
        <Button
          variant="outlined"
          onClick={handlePrevbtn}
          color="primary"
          disabled={currentPage == pages[0] ? true : false}
          startIcon={<NavigateBeforeIcon />}
        ></Button>
        <div>
          <Typography
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {renderPageNumbers}
          </Typography>
        </div>
        <Button
          variant="outlined"
          onClick={handleNextbtn}
          color="primary"
          disabled={currentPage == pages[pages.length - 1] ? true : false}
          startIcon={<NavigateNextIcon />}
        ></Button>
      </Container>
    </>
  );
}
