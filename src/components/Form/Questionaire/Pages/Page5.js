import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import moneyicon from '../../../../assets/resicons/money.svg'

const page5 = ({ values, errors, touched }) => {
  return <>

    <RadioButtonGroup
      id="radioGroup5"
      label="How are you on the money field?"
      value={values.radioGroup5}
      error={errors.radioGroup5}
      touched={touched.radioGroup5}
      title="Financial resources "
      icon={moneyicon}
    >
      <Field
        component={RadioButton}
        name="radioGroup5"
        id="RQ5A1"
        label="I can hardly survive and ensure the minimum stuff"
      />
      <Field
        component={RadioButton}
        name="radioGroup5"
        id="RQ5A2"
        label="I am not a millionaire but I have some extra during the month"
      />
      <Field
        component={RadioButton}
        name="radioGroup5"
        id="RQ5A3"
        label="Money is not an issue for me"
      />
    </RadioButtonGroup>
  </>
}

export default page5