import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import brainicon from '../../../../assets/resicons/brain.svg'

const page1 = ({ values, errors, touched }) => {
  return <>

    <RadioButtonGroup
      id="radioGroup1"
      label="How quickly can your brain absorbe new knowledge"
      value={values.radioGroup1}
      error={errors.radioGroup1}
      touched={touched.radioGroup1}
      title="Brain capacity"
      icon={brainicon}
    >
      <Field
        component={RadioButton}
        name="radioGroup1"
        id="RQ1A1"
        label="Give me a month and I can learn a new language on a basic level"
      />
      <Field
        component={RadioButton}
        name="radioGroup1"
        id="RQ1A2"
        label="I can do maximum two things in paralel"
      />
      <Field
        component={RadioButton}
        name="radioGroup1"
        id="RQ1A3"
        label="I was happy when I finally finished my shools"
      />

    </RadioButtonGroup>
  </>
}

export default page1
