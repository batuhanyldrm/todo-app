import {React, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

import Todo from './Todo';
import Done from './List';

function App(props) {
  const [datas, setDatas] = useState([
    {
      "title": "Express Myself",
      "description": "Set the building on fire.",
      "status": "To Do",
      "assignee": "Lyla Harper"
    },
    {
      "title": "Catch Up Work - Saturday",
      "description": "Gonna need you to come into work on Saturday",
      "status": "In Progress",
      "assignee": "Hayes Aguirre"
    },
    {
      "title": "Catch Up Work - Sunday",
      "description": "Gonna need you to com into work on Sunday too.",
      "status": "In Progress",
      "assignee": "Ariah Koch"
    },
    {
      "title": "TPS Reports",
      "description": "Did you get the memo?",
      "status": "Done",
      "assignee": "Salvador Vega"
    },
    {
      "title": "Buy some more \"Flare\"",
      "description": "Apparently, 13 is not the minimum number of Flare.",
      "status": "Done",
      "assignee": "Dakota Calhoun"
    },
    {
      "title": "Move desk into storage room B",
      "description": "See if you can take care of some of the rat problem while you're down here.",
      "status": "Done",
      "assignee": "Gary Crane"
    }  
  ]);

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({title: '', description: '', status: '', assignee: ''});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    setDatas([...datas, newTask]);
    setOpen(false);
    setNewTask({title: '', description: '', status: '', assignee: ''});
  };

  return (
    <div>
      <Todo
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        handleCreate={handleCreate}
        newTask={newTask}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Soostone
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="m-3">
          <Button variant="outlined" onClick={() => setOpen(true)}>Create New Task</Button> 
        </div>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Done</TableCell>
              <TableCell align="left">In Progress</TableCell>
              <TableCell align="right">To Do</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {datas.map(data =>
            <Done
              data={data}
            />
          )}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
