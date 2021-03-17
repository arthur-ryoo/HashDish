import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import MenuCategory from '../MenuCategory/MenuCategory';

const MenuItems = (props) => {
  return (
    <div>
      {props.menuItems ? (
        <Container>
          {props.menuCats.map((category, idx) => (
            <MenuCategory
              menuCats={props.menuCats}
              category={category}
              key={idx}
              selectedMenuItem={props.selectedMenuItem}
              menuItems={props.menuItems}
              delMenu={props.delMenu}
              handleMenuItemEdit={props.handleMenuItemEdit}
              handleMenuItemUpdate={props.handleMenuItemUpdate}
              handleMenuItemDelete={props.handleMenuItemDelete}
              handleMenuItemCancel={props.handleMenuItemCancel}
              handleClick={props.handleClick}
              handleDelMenu={props.handleDelMenu}
              handleGetKitchen={props.handleGetKitchen}
            />
          ))}
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default MenuItems;
