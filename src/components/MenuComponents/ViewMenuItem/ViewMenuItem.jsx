import React from 'react';
import AdminButtons from '../../AdminButtons/AdminButtons';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
  Divider,
} from '@material-ui/core';
import useStyles from './ViewMenuItemStyles';

let STORAGE_URL = 'https://homecookimages.blob.core.windows.net/';
if (process.env.NODE_ENV === 'production') {
  STORAGE_URL = 'https://lycheestorage9999.blob.core.windows.net/';
}

const ViewMenuItem = (props) => {
  const { menuId, name, pictureKey, description, price } = props.item;
  const classes = useStyles();
  return (
    <Paper
      elevation={2}
      id={menuId}
      key={menuId}
      className={classes.root}
    >
      <div className={classes.container}>
        <Typography variant={'h5'} className={classes.title}>
          {name}
        </Typography>
        {props.item.pictureKey && (
          <img
            src={`${STORAGE_URL}pictures/${pictureKey}.jpg`}
            alt="menu item"
            className={classes.image}
          />
        )}
        <Typography className={classes.description} variant={'p'}>
          {description}
        </Typography>
        <Typography className={classes.price} variant={'p'}>
          {price}
        </Typography>
      </div>
      <Divider />
      {props.delMenu === menuId ? (
        <Dialog open={true}>
          <DialogTitle>{name}</DialogTitle>
          <DialogContent>
            <Typography variant={'p'}>
              Are you sure you want to delete item?
            </Typography>
          </DialogContent>
          <DialogActions>
            <AdminButtons
              submitId=""
              submitTitle="Cancel"
              cancelId={menuId}
              cancelTitle="Yes, Delete"
              submitFunction={() => {
                props.handleDelMenu(null);
              }}
              cancelFunction={() => {
                props.handleMenuItemDelete(menuId);
              }}
            />
          </DialogActions>
        </Dialog>
      ) : (
        <AdminButtons
          submitId={menuId}
          submitTitle="Edit"
          cancelId={menuId}
          cancelTitle="Delete"
          submitFunction={() => {
            props.handleMenuItemEdit(props.idx);
          }}
          cancelFunction={() => {
            props.handleDelMenu(menuId);
          }}
        />
      )}
    </Paper>
  );
};

export default ViewMenuItem;
