import {React, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const drawerWidth = 240;

function App(props) {
  let datas = [
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
  ]
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/done">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Done"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/inProgress">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"In Progress"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/todo">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"To Do"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Soostone
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >{drawer}</Drawer>
        <Drawer
          variant="permanent"
          sx={{display: { xs: 'none', sm: 'block' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
          open
        >{drawer}</Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
        <Toolbar />
        {/* <Button variant="outlined" onClick={() => (setCreateModal(true))}>Create New Task</Button> */}
        <div className="m-3">
          <TextField fullWidth id="Title" label="Title" variant="outlined" />
        </div>
        <div className="m-3">
          <TextField fullWidth id="Description" label="Description" multiline rows={4} />
        </div>
        <div className="m-3">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Task</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Task"
              onChange={""}
            >
              <MenuItem value={1}>Done</MenuItem>
              <MenuItem value={2}>In Progress</MenuItem>
              <MenuItem value={3}>Todo</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="m-3">
          <TextField fullWidth id="Assignee" label="Assignee" variant="outlined" />
        </div>
        <div className="m-3">
          <Button variant="outlined">Create New Task</Button> 
        </div>
      </Box>
    </Box>
  );
}

export default App;
