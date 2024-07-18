import React from "react";

const Done = (props) => {
  const {data} = props

  return (
    <>
      {data.status === 'Done' &&
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

export default Done;
