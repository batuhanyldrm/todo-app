import React from "react";

const Todo = (props) => {
	const {data} = props

  return (
    <>
      {data.status === 'To Do' &&
        <div className="border m-2 p-2">
          <b>{data.title}</b>
          <br />
          {data.description}
          <br />
          assignee: <b>{data.assignee}</b>
        </div>
      }
    </>
  );
};

export default Todo;
