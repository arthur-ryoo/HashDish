import React, { Component } from 'react';
import AdminButtons from '../../AdminButtons/AdminButtons';
import styles from './ViewMenuItem.module.css';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import defaultImage from '../../../assets/no-product-image-400x400.png';

let STORAGE_URL = 'https://homecookimages.blob.core.windows.net/';
if (process.env.NODE_ENV === 'production') {
  STORAGE_URL = 'https://lycheestorage9999.blob.core.windows.net/';
}

class ViewMenuItem extends Component {
  componentWillUnmount = () => {
    let closeDel = { target: { id: '' } };
    this.props.handleDelMenu(closeDel);
  };

  render() {
    const {
      menuId,
      name,
      pictureKey,
      description,
      price,
    } = this.props.item;

    const {
      delMenu,
      idx,
      handleDelMenu,
      handleMenuItemDelete,
      handleMenuItemEdit,
    } = this.props;

    const maxLength = 125;

    return (
      <section id={menuId} key={menuId} className={styles.item}>
        <div className={styles.title}>
          <h3>{name}</h3>
          {pictureKey ? (
            <img
              src={`${STORAGE_URL}pictures/${pictureKey}.jpg`}
              alt="menu item"
            />
          ) : (
            <img src={defaultImage} alt="menu item" />
          )}
        </div>
        <div className={styles.description}>
          {description && description.length > maxLength ? (
            <p>{description.substring(0, maxLength)}...</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className={styles.price}>
          <p>{price}</p>
        </div>
        {delMenu === menuId ? (
          <Dialog open={true}>
            <DialogTitle>{name}</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this item?</p>
            </DialogContent>
            <DialogActions>
              <AdminButtons
                submitId=""
                submitTitle="Cancel"
                cancelId={menuId}
                cancelTitle="Yes, Delete"
                submitFunction={() => {
                  handleDelMenu(null);
                }}
                cancelFunction={() => {
                  handleMenuItemDelete(menuId);
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
              handleMenuItemEdit(idx);
            }}
            cancelFunction={() => {
              handleDelMenu(menuId);
            }}
          />
        )}
      </section>
    );
  }
}

export default ViewMenuItem;
