import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Divider,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: drawerWidth,
  },

  content: {
    padding: theme.spacing(0, 3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
}));

const ResponsiveDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const drawerItems = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List disablePadding className={classes.drawer}>
        <ListItem button>
          <ListItemText primary="First Item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Second Item" />
        </ListItem>
      </List>
    </>
  );
  return (
    <div className={classes.root}>
      {/* Drawer for small devices */}
      <Hidden smUp implementation="css">
        <Drawer open={open} onClose={() => setOpen(false)}>
          {drawerItems}
        </Drawer>
      </Hidden>
      {/* Drawer for large devices */}
      <Hidden xsDown implementation="css">
        <Drawer open={open} variant="permanent" onClose={() => setOpen(false)}>
          {drawerItems}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h2">New ReactJs Features!</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          ducimus magnam. Laudantium, pariatur alias numquam tempore error, ipsa
          id quos sed porro sapiente tenetur inventore, consectetur eius. Magni
          quasi, error ipsum nobis dicta totam amet ducimus ea omnis, illo nemo
          reprehenderit dignissimos quod odit nisi deserunt perspiciatis
          corporis adipisci ullam at fugit explicabo minima. Delectus voluptas,
          corrupti hic reprehenderit magnam ipsa explicabo rem suscipit, rerum
          impedit facere laboriosam minima? Delectus libero distinctio sapiente,
          dolores consequatur molestiae. Earum reprehenderit sint ea quisquam
          consequatur recusandae eos, cum itaque eaque unde quibusdam rem
          quaerat officia quia dicta tenetur sapiente ut, magni voluptatum
          atque!
        </Typography>
      </main>
    </div>
  );
};

export default ResponsiveDrawer;




