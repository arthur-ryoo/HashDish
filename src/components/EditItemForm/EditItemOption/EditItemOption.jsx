import React from 'react';
import useStyles from './EditItemOptionStyles';
import {
  Input,
  InputLabel,
  IconButton,
  Checkbox,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const EditItemOption = (props) => {
  const classes = useStyles();
  return (
    <div key={props.optionIdx} className={classes.root}>
      <div className={classes.container}>
        <div>
          <InputLabel>Name</InputLabel>
          <Input
            className={classes.field}
            inputProps={{
              'data-opt-type': props.optionType,
              'data-category-idx': props.optCatIdx,
              'data-opt-idx': props.optionIdx,
              'data-prop-name': 'name',
            }}
            name="editOption"
            type="text"
            value={props.option.name}
            onChange={props.handleOptionChange}
          />
        </div>
        <div>
          <InputLabel>Price</InputLabel>
          <Input
            className={classes.field}
            inputProps={{
              'data-opt-type': props.optionType,
              'data-category-idx': props.optCatIdx,
              'data-opt-idx': props.optionIdx,
              'data-prop-name': 'price',
            }}
            name="editOption"
            type="text"
            value={`${props.option.price || ''}`}
            onChange={props.handleOptionChange}
          />
        </div>
        <div className={classes.checkbox}>
          <div>
            <InputLabel>Default</InputLabel>
            <Checkbox
              className={classes.field}
              size="small"
              color="default"
              inputProps={{
                'data-opt-type': props.optionType,
                'data-category-idx': props.optCatIdx,
                'data-opt-idx': props.optionIdx,
                'data-prop-name': 'default',
              }}
              name="editOption"
              type="checkbox"
              checked={props.option.default}
              onChange={props.handleOptionChange}
            />
          </div>
          <div>
            <InputLabel>Sold Out</InputLabel>
            <Checkbox
              className={classes.field}
              size="small"
              color="default"
              inputProps={{
                'data-opt-type': props.optionType,
                'data-category-idx': props.optCatIdx,
                'data-opt-idx': props.optionIdx,
                'data-prop-name': 'availability',
              }}
              name="editOption"
              type="checkbox"
              checked={
                props.option.availability !== undefined
                  ? props.option.availability
                  : false
              }
              onChange={props.handleOptionChange}
            />
          </div>
        </div>
      </div>
      <div className={classes.button}>
        <IconButton
          color="secondary"
          data-opt-type={props.optionType}
          data-category-idx={props.optCatIdx}
          data-opt-idx={props.optionIdx}
          name="deleteOption"
          onClick={props.handleOptionChange}
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default EditItemOption;
