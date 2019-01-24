import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import classes from './Questionaire.css';
import Button from '../../UI/Button/Button'

class Questionaire extends Component {

  state = {
    page: 0
  }

  pagenateHandler = () => {
    console.log(this.state.page)
    console.log(this.state.page === 6)
    this.setState(state => ({
      page: state.page + 1
    }));
  }


  render() {

    return (
      <div className={classes.Quest}>
        <div className={classes.QuestTitle}>Tell us a couple of things about yourself to personalize the experience!</div>
        <Formik
          initialValues={{
            radioGroup1: "",
            radioGroup2: "",
            radioGroup3: "",
            radioGroup4: "",
            radioGroup5: "",
            radioGroup6: "",
            radioGroup7: "",

          }}
          validationSchema={Yup.object().shape({
            radioGroup1: Yup.string().required("Please pick one answer"),
            radioGroup2: Yup.string().required("Please pick one answer"),
            radioGroup3: Yup.string().required("Please pick one answer"),
            radioGroup4: Yup.string().required("Please pick one answer"),
            radioGroup5: Yup.string().required("Please pick one answer"),
            radioGroup6: Yup.string().required("Please pick one answer"),
            radioGroup7: Yup.string().required("Please pick one answer"),

          })}
          onSubmit={(values, actions) => {
            const results = {
              ...values,
              date: Date.now()
            }
            console.log(results)
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}

          render={({ values, errors, touched }) => {
            const pages = [
              <Page1 values={values} errors={errors} touched={touched} />,
              <Page2 values={values} errors={errors} touched={touched} />,
              <Page3 values={values} errors={errors} touched={touched} />,
              <Page4 values={values} errors={errors} touched={touched} />,
              <Page5 values={values} errors={errors} touched={touched} />,
              <Page6 values={values} errors={errors} touched={touched} />,
              <Page7 values={values} errors={errors} touched={touched} />,
            ]

            return (
              <Form className={classes.FormPart}>
                {pages[this.state.page]}


                {this.state.page === pages.length - 1 ?
                  <button type="submit">Submit</button> :
                  <button className={classes.NextBtn} onClick={this.pagenateHandler}>Next question</button>}

              </Form>
            )
          }

          }
        />
      </div>
    );
  }

}

export default Questionaire