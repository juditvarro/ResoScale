import React from 'react';
import InputFeedback from './InputFeedback';
import classes from './RadioButtonGroup.css'

const radioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  children,
  title,
  icon
}) => {


  return (
    <div className={classes.RadioButtonGroup}>
      <div className={classes.ResourceCat}><img src={icon} alt={title} className={classes.ResourceCatIcon}></img><span className={classes.ResourceCatLabel} >{title}</span></div>
      <fieldset className={classes.GroupFieldSet}>
        <legend className={classes.FieldSetLegend}>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>

    </div>
  );
};

export default radioButtonGroup