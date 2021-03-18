import React from 'react';
import { Button, Container } from '@material-ui/core';
import useStyles from './AdminButtonsStyles';

const AdminButtons = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        id={props.submitId}
        onClick={props.submitFunction}
      >
        {props.submitTitle}
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        id={props.cancelId}
        onClick={props.cancelFunction}
      >
        {props.cancelTitle}
      </Button>
    </Container>
  );
};

export default AdminButtons;
