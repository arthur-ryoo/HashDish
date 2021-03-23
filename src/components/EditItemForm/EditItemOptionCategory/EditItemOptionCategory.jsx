import React from 'react';
import EditItemOption from '../EditItemOption/EditItemOption';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './EditItemOptionCategoryStyles';
import { Delete } from '@material-ui/icons';

const EditItemOptionCategory = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">{props.headerText}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.container}>
          <button
            color="primary"
            data-opt-type={props.optionType}
            name="addOptCat"
            onClick={props.handleOptionChange}
          >
            Add Option Category
          </button>
          <div className={classes.container}>
            {props.optionsCategories.length > 0 ? (
              props.optionsCategories.map(
                (optionCategory, optCatIdx) => (
                  <div key={optCatIdx} className={classes.category}>
                    <div className={classes.interface}>
                      <div className={classes.title}>
                        <div className={classes.description}>
                          <label>Category Name</label>
                          <input
                            data-prop-name="name"
                            data-category-idx={optCatIdx}
                            data-opt-type={props.optionType}
                            name="editOptCat"
                            type="text"
                            value={optionCategory.name}
                            onChange={props.handleOptionChange}
                          />
                          <label>Option Type</label>
                          <select
                            data-prop-name="option_type"
                            data-category-idx={optCatIdx}
                            data-opt-type={props.optionType}
                            name="editOptCat"
                            value={optionCategory.option_type}
                            onChange={props.handleOptionChange}
                          >
                            <option value="radio">radio</option>
                            <option value="checkbox">checkbox</option>
                          </select>
                        </div>
                        <Button
                          color="secondary"
                          data-category-idx={optCatIdx}
                          data-opt-type={props.optionType}
                          name="deleteOptCat"
                          onClick={props.handleOptionChange}
                        >
                          Delete
                        </Button>
                      </div>
                      <button
                        data-category-idx={optCatIdx}
                        data-opt-type={props.optionType}
                        name="moveOptCatBackward"
                        onClick={props.handleOptionChange}
                      >
                        ▲
                      </button>
                      <button
                        data-category-idx={optCatIdx}
                        data-opt-type={props.optionType}
                        name="moveOptCatForward"
                        onClick={props.handleOptionChange}
                      >
                        ▼
                      </button>
                      <button
                        color="primary"
                        data-category-idx={optCatIdx}
                        data-opt-type={props.optionType}
                        name="addOption"
                        onClick={props.handleOptionChange}
                      >
                        Add Option
                      </button>
                    </div>
                    {optionCategory.options.length > 0 && (
                      <div>
                        <table>
                          <tbody>
                            <tr>
                              <th>Name</th>
                              <th>Add-on Price</th>
                              <th>Default</th>
                              <th>Sold Out</th>
                            </tr>
                            {optionCategory.options.map(
                              (option, optionIdx) => (
                                <EditItemOption
                                  key={optionIdx}
                                  optionType={props.optionType}
                                  option={option}
                                  optCatIdx={optCatIdx}
                                  optionIdx={optionIdx}
                                  handleOptionChange={
                                    props.handleOptionChange
                                  }
                                />
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ),
              )
            ) : (
              <p>Item has no options currently.</p>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default EditItemOptionCategory;
