import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import energyicon from '../../../../assets/resicons/energy.svg'

const page2 = ({ values, errors, touched }) => {

  return (<>
    <RadioButtonGroup
      id="energy"
      label="How quickly you can run out of energy"
      value={values.energy}
      error={errors.energy}
      touched={touched.energy}
      title="Energy level"
      icon={energyicon}
    >
      <Field
        component={RadioButton}
        name="energy"
        id="RQ2A1"
        label="I am a Duracell bunny. Sleeping is for the weaks"
      />
      <Field
        component={RadioButton}
        name="energy"
        id="RQ2A2"
        label="I am usually tired already after lunchtime."
      />
      <Field
        component={RadioButton}
        name="energy"
        id="RQ2A3"
        label="I can put myself to things but then I need some recharging period?"

      />
    </RadioButtonGroup>
  </>)
}

export default page2