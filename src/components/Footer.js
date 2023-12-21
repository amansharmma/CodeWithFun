import React from 'react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '3rem',
    backgroundColor: "skyblue",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container component="footer" className={classes.footer} justifyContent="center" alignItems="center">
      <Paper elevation={3}>
        Footer
      </Paper>
    </Grid>
  );
};
export default Footer;
