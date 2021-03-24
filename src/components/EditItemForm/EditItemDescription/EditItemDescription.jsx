import React from 'react';
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Input,
  Container,
  TextareaAutosize,
  InputLabel,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './EditItemDescriptionStyles';

const EditItemDescription = (props) => {
  const classes = useStyles();
  const {
    itemName,
    menuCats,
    itemImage,
    itemDescription,
    itemPrice,
    itemCategory,
    handleChange,
    handleImageChange,
  } = props;
  return (
    <Container className={classes.root}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Item Description</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.container}>
          <div className={classes.field}>
            <InputLabel>Item Name</InputLabel>
            <Input
              className={classes.input}
              name="name"
              type="text"
              value={itemName}
              onChange={handleChange}
            />
          </div>
          <div className={classes.field}>
            <InputLabel>Category</InputLabel>
            <Input
              className={classes.input}
              type="text"
              list="categories"
              name="category"
              defaultValue={itemCategory ? itemCategory : ''}
              onChange={handleChange}
            />
            <datalist id="categories">
              {menuCats.map((category, idx) => (
                <option name="category" value={category} key={idx}>
                  {category}
                </option>
              ))}
            </datalist>
          </div>
          <div className={classes.field}>
            <InputLabel>Description</InputLabel>
            <TextareaAutosize
              className={classes.input}
              aria-label="item description"
              placeholder="Type description here"
              name="description"
              type="text"
              rows={5}
              value={itemDescription}
              onChange={handleChange}
            />
          </div>
          <div className={classes.field}>
            <InputLabel>Price</InputLabel>
            <Input
              className={classes.input}
              name="price"
              type="text"
              value={itemPrice}
              onChange={handleChange}
            />
          </div>
          <div className={classes.field}>
            <InputLabel>Image</InputLabel>
            {itemImage && (
              <img
                className={classes.image}
                src={itemImage}
                alt="menu item"
              />
            )}
            <Input
              className={classes.input}
              id="image"
              name="image"
              type="file"
              accept="image/*"
              width="50"
              height="50"
              onChange={handleImageChange}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default EditItemDescription;
