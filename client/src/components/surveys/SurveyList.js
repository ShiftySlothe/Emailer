import { Box, Text, Heading } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchSurveys } from "../../redux/actions";
import { useEffect, useCallback } from "react";

export default function SurveyList() {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.surveys);
  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  const renderSurveys = useCallback(() => {
    return surveys.map((survey) => {
      console.log(survey);
      return (
        <Box key={survey._id}>
          <Box>
            <Text>{survey.title}</Text>
            <Text>{survey.body}</Text>
            <Text>{new Date(survey.dateSent).toLocaleDateString()}</Text>
          </Box>
          <Box>
            <Text>Yes: {survey.yes}</Text>
            <Text>No: {survey.no}</Text>
          </Box>
        </Box>
      );
    });
  }, [surveys]);

  return (
    <Box>
      <Heading>Survey List</Heading>
      {renderSurveys()}
    </Box>
  );
}
