import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import { reduxForm } from "redux-form";

export function SurveyNew() {
  const [showFormReview, setShowFormReview] = useState(false);
  return (
    <Box>
      <Center>
        <Heading>Survey Form</Heading>
      </Center>
      {showFormReview ? (
        <SurveyFormReview
          returnToSurvey={() => {
            setShowFormReview(!showFormReview);
          }}
        />
      ) : (
        <SurveyForm
          onSurveySubmit={() => {
            setShowFormReview(!showFormReview);
          }}
        />
      )}
    </Box>
  );
}

export default reduxForm({ form: "surveyForm" })(SurveyNew);
