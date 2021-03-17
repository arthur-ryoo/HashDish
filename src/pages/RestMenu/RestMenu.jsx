import React from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './RestMenuStyles';

import MenuItems from '../../components/MenuComponents/MenuItems/MenuItems';
import EditMenuItem from '../../components/EditItemForm/EditMenuItem/EditMenuItem';

const Menu = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={false}>
      {props.myKitchen === null ? (
        <Redirect to="/" />
      ) : (
        <div className={classes.container}>
          {props.addMenuItem ? (
            <EditMenuItem
              menuCats={props.menuCats}
              addMenuItem={props.addMenuItem}
              selectedMenuItem={props.selectedMenuItem}
              handleGetKitchen={props.handleGetKitchen}
              handleFormToggle={props.handleFormToggle}
              handleAddItemForm={props.handleAddItemForm}
            />
          ) : (
            <div className={classes.add}>
              <Fab
                size="large"
                color="primary"
                aria-label="add"
                onClick={() => props.handleFormToggle('addMenuItem')}
              >
                <AddIcon />
              </Fab>
            </div>
          )}
          <div className={''}>
            <Typography variant="h2">Menu</Typography>
            <MenuItems
              delMenu={props.delMenu}
              selectedMenuItem={props.selectedMenuItem}
              menuItems={props.menuItems}
              menuCats={props.menuCats}
              handleDelMenu={props.handleDelMenu}
              handleClick={props.handleClick}
              handleMenuItemEdit={props.handleMenuItemEdit}
              handleMenuItemUpdate={props.handleMenuItemUpdate}
              handleMenuItemDelete={props.handleMenuItemDelete}
              handleMenuItemCancel={props.handleMenuItemCancel}
              handleGetKitchen={props.handleGetKitchen}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Menu;
