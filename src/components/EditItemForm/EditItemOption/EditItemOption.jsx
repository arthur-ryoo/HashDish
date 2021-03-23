import React from 'react';
import useStyles from './EditItemOptionStyles';

const EditItemOption = (props) => {
  const classes = useStyles();
  return (
    <tr key={props.optionIdx} className={classes.container}>
      <td>
        <input
          data-opt-type={props.optionType}
          data-category-idx={props.optCatIdx}
          data-opt-idx={props.optionIdx}
          data-prop-name="name"
          name="editOption"
          type="text"
          value={props.option.name}
          onChange={props.handleOptionChange}
        />
      </td>
      <td>
        <input
          data-opt-type={props.optionType}
          data-category-idx={props.optCatIdx}
          data-opt-idx={props.optionIdx}
          data-prop-name="price"
          name="editOption"
          type="text"
          value={`${props.option.price || ''}`}
          onChange={props.handleOptionChange}
        />
      </td>
      <td>
        <input
          data-opt-type={props.optionType}
          data-category-idx={props.optCatIdx}
          data-opt-idx={props.optionIdx}
          data-prop-name="default"
          name="editOption"
          type="checkbox"
          checked={props.option.default}
          onChange={props.handleOptionChange}
        />
      </td>
      <td>
        <input
          data-opt-type={props.optionType}
          data-category-idx={props.optCatIdx}
          data-opt-idx={props.optionIdx}
          data-prop-name="availability"
          name="editOption"
          type="checkbox"
          checked={
            props.option.availability !== undefined
              ? props.option.availability
              : false
          }
          onChange={props.handleOptionChange}
        />
      </td>
      <td className={''}>
        <button
          data-opt-type={props.optionType}
          data-category-idx={props.optCatIdx}
          data-opt-idx={props.optionIdx}
          name="deleteOption"
          onClick={props.handleOptionChange}
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default EditItemOption;
