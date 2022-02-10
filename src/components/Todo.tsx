import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import styled from "styled-components";

interface IProps {
  task: any;
  deleteTask: any;
  handleFavTask: any;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding-left: 10px;
  height: 60px;
`;

export default function Todo({ task, deleteTask, handleFavTask }: IProps) {
  return (
    <>
      <Container>
        <Typography>{task.title}</Typography>
        <div>
          <IconButton
            onClick={() => {
              handleFavTask(task);
            }}
          >
            {task.fav ? (
              <StarIcon style={{ color: "#F7C427" }} />
            ) : (
              <StarOutlineIcon style={{ color: "#F7C427" }} />
            )}
          </IconButton>

          <IconButton onClick={() => deleteTask(task._id)}>
            <DeleteIcon style={{ color: "#E63C2E" }} />
          </IconButton>
        </div>
      </Container>
    </>
  );
}
