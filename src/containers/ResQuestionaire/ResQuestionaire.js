import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Page1 from '../../components/Form/Questionaire/Pages/Page1';
import Page2 from '../../components/Form/Questionaire/Pages/Page2';
import Page3 from '../../components/Form/Questionaire/Pages/Page3';
import Page4 from '../../components/Form/Questionaire/Pages/Page4';
import Page5 from '../../components/Form/Questionaire/Pages/Page5';
import Page6 from '../../components/Form/Questionaire/Pages/Page6';
import Page7 from '../../components/Form/Questionaire/Pages/Page7';
import classes from './ResQuestionaire.css';
// import Button from '../../UI/Button/Button'
import questEvaluation from '../../utils/questionaireKey';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class ResQuestionaire extends Component {

  state = {
    page: 0
  }

  pagenateHandler = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  componentDidMount() {
    this.props.onListingResolutions()
  }

  render() {

    return (
      <div className={classes.Quest}>
        <div className={classes.QuestTitle}>Tell us a couple of things about yourself to personalize the experience!</div>
        <Formik
          initialValues={{
            brain: "",
            energy: "",
            freetime: "",
            health: "",
            money: "",
            socialvalue: "",
            willpower: "",

          }}
          validationSchema={Yup.object().shape({
            brain: Yup.string().required("Please pick one answer1"),
            energy: Yup.string().required("Please pick one answer"),
            freetime: Yup.string().required("Please pick one answer"),
            health: Yup.string().required("Please pick one answer"),
            money: Yup.string().required("Please pick one answer"),
            socialvalue: Yup.string().required("Please pick one answer"),
            willpower: Yup.string().required("Please pick one answer"),

          })}
          onSubmit={(values, actions) => {
            const results = {
              ...values,
              date: Date.now()
            }

            const evaluatedresults = questEvaluation(results)
            console.log('EVALUATION', evaluatedresults)
            this.props.onSettingResourcesBasedOnForm(evaluatedresults)
            actions.setSubmitting(false);
            this.props.history.replace('/')
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
                <div className={classes.CounterDiv}>You are at the {this.state.page + 1}. question and you have {pages.length - this.state.page - 1} more</div>
                {pages[this.state.page]}


                {this.state.page === pages.length - 1 ?
                  <button type="submit" className={classes.SubmitBtn}>Submit</button> :
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

const mapDispatchToProps = dispatch => {
  return {
    onSettingResourcesBasedOnForm: (results) => dispatch(actions.setResources(results)),
    onListingResolutions: () => dispatch(actions.fetchResolutions()),
  }
}

export default connect(null, mapDispatchToProps)(ResQuestionaire)