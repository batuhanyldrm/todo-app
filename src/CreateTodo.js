import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Todo = (props) => {
  const { open, handleClose, handleChange, handleCreate, newTask } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <div style={{ textAlign: "center" }}>Add Todo</div>
        </DialogTitle>
        <DialogContent>
          <div className="m-3">
            <TextField
              fullWidth
              id="Title"
              label="Title"
              variant="outlined"
              name="title"
              value={newTask.title}
              onChange={handleChange}
            />
          </div>
          <div className="m-3">
            <TextField
              fullWidth
              id="Description"
              label="Description"
              multiline
              rows={4}
              name="description"
              value={newTask.description}
              onChange={handleChange}
            />
          </div>
          <div className="m-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Task</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                value={newTask.status}
                label="Task"
                onChange={handleChange}
              >
                <MenuItem value="Done">Done</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="To Do">To Do</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="m-3">
            <TextField
              fullWidth
              id="Assignee"
              label="Assignee"
              variant="outlined"
              name="assignee"
              value={newTask.assignee}
              onChange={handleChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create New Task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Todo;
