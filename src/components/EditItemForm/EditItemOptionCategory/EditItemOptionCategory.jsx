import React from 'react';
import EditItemOption from '../EditItemOption/EditItemOption';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Button,
  IconButton,
  Input,
  InputLabel,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './EditItemOptionCategoryStyles';
import {
  Delete,
  ArrowDownward,
  ArrowUpward,
} from '@material-ui/icons';

const EditItemOptionCategory = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Accordion className={classes.container}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">{props.headerText}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.container}>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            data-opt-type={props.optionType}
            name="addOptCat"
            onClick={props.handleOptionChange}
            className={classes.add}
          >
            Add Category
          </Button>
          <div className={classes.container}>
            {props.optionsCategories.length > 0 ? (
              props.optionsCategories.map(
                (optionCategory, optCatIdx) => (
                  <div key={optCatIdx} className={classes.category}>
                    <div className={classes.interface}>
                      <div className={classes.title}>
                        <div className={classes.description}>
                          <InputLabel>Category Name</InputLabel>
                          <Input
                            inputProps={{
                              'data-prop-name': 'name',
                              'data-category-idx': optCatIdx,
                              'data-opt-type': props.optionType,
                            }}
                            name="editOptCat"
                            type="text"
                            value={optionCategory.name}
                            onChange={props.handleOptionChange}
                            className={classes.input}
                          />
                          <InputLabel className={classes.label}>
                            Option Type
                          </InputLabel>
                          <select
                            data-prop-name="option_type"
                            data-category-idx={optCatIdx}
                            data-opt-type={props.optionType}
                            name={'editOptCat'}
                            value={optionCategory.option_type}
                            onChange={props.handleOptionChange}
                            className={classes.input}
                          >
                            <option value="radio">radio</option>
                            <option value="checkbox">checkbox</option>
                          </select>
                        </div>
                        <div className={classes.buttons}>
                          <IconButton
                            color="secondary"
                            data-category-idx={optCatIdx}
                            data-opt-type={props.optionType}
                            name="deleteOptCat"
                            onClick={props.handleOptionChange}
                          >
                            <Delete />
                          </IconButton>
                          <div className={classes.arrows}>
                            <Button
                              size="small"
                              data-category-idx={optCatIdx}
                              data-opt-type={props.optionType}
                              name="moveOptCatBackward"
                              onClick={props.handleOptionChange}
                            >
                              <ArrowUpward />
                            </Button>
                            <Button
                              size="small"
                              data-category-idx={optCatIdx}
                              data-opt-type={props.optionType}
                              name="moveOptCatForward"
                              onClick={props.handleOptionChange}
                            >
                              <ArrowDownward />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        data-category-idx={optCatIdx}
                        data-opt-type={props.optionType}
                        name="addOption"
                        onClick={props.handleOptionChange}
                      >
                        Add Option
                      </Button>
                    </div>
                    {optionCategory.options.length > 0 && (
                      <div>
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
