import {React, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CreateTodo from './CreateTodo';
import Done from './Done';
import InProgress from './InProgress';
import Todo from './Todo';

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
      <CreateTodo
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        handleCreate={handleCreate}
        newTask={newTask}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">Soostone</Typography>
          </Toolbar>
        </AppBar>
        <div className="m-3">
          <Button variant="outlined" onClick={() => setOpen(true)}>Create New Task</Button> 
        </div>
      </Box>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="done"
            id="done"
          >
            Done
          </AccordionSummary>
          <AccordionDetails>
            {datas.map(data =>
              <Done
                data={data}
              />
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="in-progress"
            id="in-progress"
          >
            In Progress
          </AccordionSummary>
          <AccordionDetails>
            {datas.map(data =>
              <InProgress
                data={data}
              />
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="todo"
            id="todo"
          >
            To Do
          </AccordionSummary>
          <AccordionDetails>
            {datas.map(data =>
              <Todo
                data={data}
              />
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
