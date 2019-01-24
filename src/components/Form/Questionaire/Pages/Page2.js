import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import energyicon from '../../../../assets/resicons/energy.svg'

const page2 = ({ values, errors, touched }) => {

  return (<>
    <RadioButtonGroup
      id="radioGroup2"
      label="How quickly you can run out of energy"
      value={values.radioGroup2}
      error={errors.radioGroup2}
      touched={touched.radioGroup2}
      title="Energy level"
      icon={energyicon}
    >
      <Field
        component={RadioButton}
        name="radioGroup2"
        id="RQ2A1"
        label="I am a Duracell bunny. Sleeping is for the weaks"
      />
      <Field
        component={RadioButton}
        name="radioGroup2"
        id="RQ2A2"
        label="I can put myself to things but then I need some recharging period?"
      />
      <Field
        component={RadioButton}
        name="radioGroup2"
        id="RQ2A3"
        label="I am usually tired already after lunchtime."
      />
    </RadioButtonGroup>
  </>)
}

export default page2