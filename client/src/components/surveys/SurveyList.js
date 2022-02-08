import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchSurveys } from "../../redux/actions";
import { useEffect, useCallback } from "react";
import SurveyCard from "./SurveyCard";

export default function SurveyList() {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.surveys);
  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  const renderSurveys = useCallback(() => {
    return surveys.map((survey) => {
      return (
        <Box p={3}>
          <SurveyCard survey={survey} />
        </Box>
      );
    });
  }, [surveys]);

  return (
    <Box w="100vw">
      <Heading size="md">Completed Surveys</Heading>
      <Flex flexWrap={"wrap"}>{renderSurveys()}</Flex>
    </Box>
  );
}
