import React from 'react';
import { Field } from 'formik';
import RadioButton from '../../FormElements/RadioButton';
import RadioButtonGroup from '../../FormElements/RadioButtonGroup';
import freetimeicon from '../../../../assets/resicons/freetime.svg'

const page3 = ({ values, errors, touched }) => {
  return <>

    <RadioButtonGroup
      id="radioGroup3"
      label="What about freetime?"
      value={values.radioGroup3}
      error={errors.radioGroup3}
      touched={touched.radioGroup3}
      title="Available freetime"
      icon={freetimeicon}
    >
      <Field
        component={RadioButton}
        name="radioGroup3"
        id="RQ3A1"
        label="I have not got freetime for 10 years"
      />
      <Field
        component={RadioButton}
        name="radioGroup3"
        id="RQ3A2"
        label="I can find some extra time if I watch a little less Netflix"
      />
      <Field
        component={RadioButton}
        name="radioGroup3"
        id="RQ3A3"
        label="I have plenty"
      />
    </RadioButtonGroup>
  </>
}

export default page3