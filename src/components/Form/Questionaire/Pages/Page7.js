import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import willpowericon from '../../../../assets/resicons/willpower.svg'

const page7 = ({ values, errors, touched }) => {
  return <>

    <RadioButtonGroup
      id="radioGroup7"
      label="What about your willpower?"
      value={values.radioGroup7}
      error={errors.radioGroup7}
      touched={touched.radioGroup7}
      title="Willpower"
      icon={willpowericon}
    >
      <Field
        component={RadioButton}
        name="radioGroup7"
        id="RQ7A1"
        label="Do you really want to challenge me? I bet you will lose."
      />
      <Field
        component={RadioButton}
        name="radioGroup7"
        id="RQ7A2"
        label="First three days I am motivated then I lose it"
      />
      <Field
        component={RadioButton}
        name="radioGroup7"
        id="RQ7A3"
        label="I am a human ofc but if I decide something I can commit"
      />
    </RadioButtonGroup>
  </>
}

export default page7