import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { FIELDS } from "./SurveyForm";
import { withRouter } from "react-router";
import { submitSurvey } from "../../redux/actions";

function SurveyFormReview({ returnToSurvey, history }) {
  const formValues = useSelector((state) => state.form.surveyForm.values);
  const dispatch = useDispatch();
  const dispatchForm = () => {
    dispatch(submitSurvey(formValues, history));
  };
  return (
    <Flex minh="100vh" direction="column" alignItems="center">
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
            dispatchForm();
          }}
        >
          Send survey
        </Button>
      </Flex>
    </Flex>
  );
}

export default withRouter(SurveyFormReview);
