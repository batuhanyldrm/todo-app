import { TableCell, TableRow } from "@mui/material";
import React from "react";

const Done = (props) => {
  const {data} = props

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {data.status === 'Done' &&
          <>
            <b>{data.title}</b>
            <br />
            {data.description}
            <br />
            assignee: <b>{data.assignee}</b>
          </>
        }
      </TableCell>
      <TableCell align="left">
        {data.status === 'In Progress' &&
          <>
            <b>{data.title}</b>
            <br />
            {data.description}
            <br />
            assignee: <b>{data.assignee}</b>
          </>
        }
      </TableCell>
      <TableCell align="right">
        {data.status === 'To Do' &&
          <>
            <b>{data.title}</b>
            <br />
            {data.description}
            <br />
            assignee: <b>{data.assignee}</b>
          </>
        }
      </TableCell>
    </TableRow>
  );
};

export default Done;
