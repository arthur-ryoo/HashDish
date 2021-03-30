import React from 'react';
import MenuItemContainer from '../MenuItemContainer/MenuItemContainer';
import { Typography, Container, Divider } from '@material-ui/core';
import useStyles from './MenuCategoryStyles';

const MenuCategory = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">{props.category}</Typography>
      <Container className={classes.container}>
        {props.menuItems.map((item, idx) =>
          item.category === props.category && item.status > -1 ? (
            <MenuItemContainer
              key={idx}
              item={item}
              idx={idx}
              menuCats={props.menuCats}
              category={props.category}
              selectedMenuItem={props.selectedMenuItem}
              delMenu={props.delMenu}
              handleDelMenu={props.handleDelMenu}
              handleClick={props.handleClick}
              handleMenuItemEdit={props.handleMenuItemEdit}
              handleMenuItemUpdate={props.handleMenuItemUpdate}
              handleMenuItemDelete={props.handleMenuItemDelete}
              handleMenuItemCancel={props.handleMenuItemCancel}
              handleGetKitchen={props.handleGetKitchen}
            />
          ) : null,
        )}
      </Container>
      <Divider />
    </div>
  );
};

export default MenuCategory;
