import React from 'react';
import classes from './RadioButton.css';

const radioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classes.input}
        {...props}
      />
      <label htmlFor={id}>{label}</label>

    </div>
  );
};

export default radioButton