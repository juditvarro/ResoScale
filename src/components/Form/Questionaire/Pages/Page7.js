import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import willpowericon from '../../../../assets/resicons/willpower.svg'

const page7 = ({ values, errors, touched }) => {
  return <>

    <RadioButtonGroup
      id="willpower"
      label="What about your willpower?"
      value={values.willpower}
      error={errors.willpower}
      touched={touched.willpower}
      title="Willpower"
      icon={willpowericon}
    >
      <Field
        component={RadioButton}
        name="willpower"
        id="RQ7A1"
        label="Do you really want to challenge me? I bet you will lose."
      />
      <Field
        component={RadioButton}
        name="willpower"
        id="RQ7A2"
        label="First three days I am motivated then I lose it"
      />
      <Field
        component={RadioButton}
        name="willpower"
        id="RQ7A3"
        label="I am a human ofc but if I decide something I can commit"
      />
    </RadioButtonGroup>
  </>
}

export default page7