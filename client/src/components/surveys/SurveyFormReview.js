import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { FIELDS } from "./SurveyForm";
import * as actions from "../../redux/actions";
import { withRouter } from "react-router";

function SurveyFormReview({
  returnToSurvey,
  formValues,
  submitSurvey,
  history,
}) {
  return (
    <Flex direction="column" alignItems="center">
      <Heading>Please review your submission.</Heading>
      {FIELDS.map(({ label, name }, index) => {
        return (
          <Flex direction="column" alignItems="center" key={index}>
            <Text>{label}</Text>
            <Text>{formValues[name]}</Text>
          </Flex>
        );
      })}
      <Flex>
        <Button onClick={returnToSurvey} m={2}>
          Back
        </Button>
        <Button
          m={2}
          onClick={() => {
            submitSurvey(formValues, history);
          }}
        >
          Send survey
        </Button>
      </Flex>
    </Flex>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
