import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import socialvalueicon from '../../../../assets/resicons/socialvalue.svg'

const page6 = ({ values, errors, touched }) => {
  return <>
    <RadioButtonGroup
      id="radioGroup6"
      label="Are you surrounded by friends and family?"
      value={values.radioGroup6}
      error={errors.radioGroup6}
      touched={touched.radioGroup6}
      title="Social life"
      icon={socialvalueicon}
    >
      <Field
        component={RadioButton}
        name="radioGroup6"
        id="RQ6A1"
        label="I have plenty Facebook friends and a couple of real ones"
      />
      <Field
        component={RadioButton}
        name="radioGroup6"
        id="RQ6A2"
        label="Everybody wants to meet me."
      />
      <Field
        component={RadioButton}
        name="radioGroup6"
        id="RQ6A3"
        label="I like to be alone"
      />
    </RadioButtonGroup>

  </>
}

export default page6