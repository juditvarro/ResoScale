import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import healthicon from '../../../../assets/resicons/health.svg'

const page4 = ({ values, errors, touched }) => {
  return <>
    <RadioButtonGroup
      id="health"
      label="What can you tell us about your health?"
      value={values.health}
      error={errors.health}
      touched={touched.health}
      title="Health level"
      icon={healthicon}
    >
      <Field
        component={RadioButton}
        name="health"
        id="RQ4A1"
        label="I am close to zero. I am sick, I have no physical condition..."
      />
      <Field
        component={RadioButton}
        name="health"
        id="RQ4A2"
        label="I was never healthier"
      />
      <Field
        component={RadioButton}
        name="health"
        id="RQ4A3"
        label="I intend to pay attention but accidentally I fail"
      />
    </RadioButtonGroup>
  </>
}

export default page4